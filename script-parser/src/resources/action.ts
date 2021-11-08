import {
  globals,
  createOrReplaceInfluxData,
  replaceInFile,
  extractPeriodNumberFromString
} from '../utils';
import {
  FLAG,
  InfluxNotificationEndpoint,
  INFLUX_AUTH_METHOD,
  INFLUX_CHECK_TYPE,
  INFLUX_ENDPOINT_DESTINATION,
  INFLUX_ENTITY_TYPE,
  INFLUX_STATUS,
  INFLUX_THRESHOLD_LEVEL,
  INFLUX_THRESHOLD_TYPE,
  REQUEST_METHOD,
  SCRIPT_TYPE
} from '../models';

/**
 * Creates required tasks, and alerts to set up the indicator and the notification service.
 *
 * @export
 * @param {Map<string, string>} flags antlr flags
 * @returns {*}  {Promise<void>}
 */
export async function setupIndicators(
  flags: Map<string, string>
): Promise<void> {
  const script = generateDownsamplingScript(flags);
  await createOrReplaceInfluxData(
    INFLUX_ENTITY_TYPE.TASKS,
    `${flags.get(FLAG.ENDPOINT)}_${INFLUX_ENTITY_TYPE.TASKS}`,
    {
      org: globals.metaData.org,
      orgID: globals.metaData.orgID,
      status: INFLUX_STATUS.ACTIVE,
      flux: script
    }
  );
  await createAlert(flags);
}

/**
 * Generates the flux script for downsampling two given indicators by the given operation and stores it in a new influx field column.
 *
 * @param {Map<string, string>} flags antlr flags
 * @returns {*}  {string}
 */
function generateDownsamplingScript(flags: Map<string, string>): string {
  const indicator1 = flags.get(FLAG.INDICATOR1);
  const indicator2 = flags.get(FLAG.INDICATOR2);
  let file = replaceInFile(
    SCRIPT_TYPE.DOWNSAMPLING,
    flags,
    [
      FLAG.INFLUX_TASK,
      `${flags.get(FLAG.ENDPOINT)}_${INFLUX_ENTITY_TYPE.TASKS}`
    ],
    [FLAG.INTERVAL, globals.metaData.interval],
    [FLAG.SCRIPT1, globals.indicators.get(indicator1).data],
    [FLAG.SCRIPT2, globals.indicators.get(indicator2).data],
    [FLAG.INDICATOR1],
    [FLAG.INDICATOR2],
    [FLAG.LOGICAL_OPERATOR],
    [FLAG.ENDPOINT],
    [FLAG.INFLUX_ORGANIZATION, globals.metaData.org],
    [FLAG.INFLUX_BUCKET, globals.metaData.influxBucket]
  );
  return file;
}

/**
 * Create a influx alert with given paramters by creating a check, endpoint and rule.
 *
 * @param {Map<string, string>} flags antlr flags
 * @returns {*}  {Promise<void>}
 */
async function createAlert(flags: Map<string, string>): Promise<void> {
  await createCheck(flags);
  const endpoint = await createEndpoint(flags);
  await createRule(flags, endpoint.id);
}

/**
 * Create a influx check with given paramters.
 *
 * @param {Map<string, string>} flags
 * @returns {*}  {Promise<void>}
 */
async function createCheck(flags: Map<string, string>): Promise<void> {
  const script = replaceInFile(
    SCRIPT_TYPE.CHECK,
    flags,
    [FLAG.INFLUX_BUCKET, globals.metaData.influxBucket],
    [FLAG.ENDPOINT]
  );
  const endpoint = flags.get(FLAG.ENDPOINT);

  await createOrReplaceInfluxData(
    INFLUX_ENTITY_TYPE.CHECKS,
    `${endpoint}_${INFLUX_ENTITY_TYPE.CHECKS}`,
    {
      name: `${endpoint}_${INFLUX_ENTITY_TYPE.CHECKS}`,
      orgID: globals.metaData.orgID,
      query: { text: script },
      every: globals.metaData.interval,
      offset: `${extractPeriodNumberFromString(globals.metaData.offset) + 1}s`,
      status: INFLUX_STATUS.ACTIVE,
      statusMessageTemplate: `${flags.get(FLAG.INDICATOR1)} ${flags.get(
        FLAG.LOGICAL_OPERATOR
      )} ${flags.get(FLAG.INDICATOR2)}`,
      thresholds: [
        {
          allValues: false,
          level: INFLUX_THRESHOLD_LEVEL.CRITICAL,
          min: 0.5,
          max: 1.5,
          within: true,
          type: INFLUX_THRESHOLD_TYPE.RANGE
        }
      ],
      type: INFLUX_CHECK_TYPE.THRESHOLD,
      tags: [{ key: 'check_type', value: flags.get(FLAG.ENDPOINT) }]
    }
  );
}

/**
 * Create a influx endpoint with given paramters and returns it.
 *
 * @param {Map<string, string>} flags antlr flags
 * @returns {*}  {Promise<InfluxNotificationEndpoint>}
 */
async function createEndpoint(
  flags: Map<string, string>
): Promise<InfluxNotificationEndpoint> {
  const endpoint = flags.get(FLAG.ENDPOINT);

  return createOrReplaceInfluxData<InfluxNotificationEndpoint>(
    INFLUX_ENTITY_TYPE.NOTIFICATION_ENDPOINTS,
    `${endpoint}_${INFLUX_ENTITY_TYPE.NOTIFICATION_ENDPOINTS}`,
    {
      name: `${endpoint}_${INFLUX_ENTITY_TYPE.NOTIFICATION_ENDPOINTS}`,
      orgID: globals.metaData.orgID,
      status: INFLUX_STATUS.ACTIVE,
      type: INFLUX_ENDPOINT_DESTINATION.HTTP,
      url: globals.indicators.get(endpoint).data,
      method: REQUEST_METHOD.POST,
      authMethod: INFLUX_AUTH_METHOD.NONE
    },
    null,
    { orgID: globals.metaData.orgID }
  );
}

/**
 * Create a influx rule with given paramters.
 *
 * @param {Map<string, string>} flags antlr flags
 * @param {string} endpointID id of notification endpoint to refer to
 * @returns {*}  {Promise<void>}
 */
async function createRule(
  flags: Map<string, string>,
  endpointID: string
): Promise<void> {
  const endpoint = flags.get(FLAG.ENDPOINT);
  const period = `${
    extractPeriodNumberFromString(globals.metaData.interval) * 2
  }s`;

  await createOrReplaceInfluxData(
    INFLUX_ENTITY_TYPE.NOTIFICATION_RULES,
    `${endpoint}_${INFLUX_ENTITY_TYPE.NOTIFICATION_RULES}`,
    {
      endpointID,
      orgID: globals.metaData.orgID,
      status: INFLUX_STATUS.ACTIVE,
      name: `${endpoint}_${INFLUX_ENTITY_TYPE.NOTIFICATION_RULES}`,
      every: period,
      offset: globals.metaData.influxOffset,
      statusRules: [
        {
          currentLevel: INFLUX_THRESHOLD_LEVEL.CRITICAL,
          previousLevel: INFLUX_THRESHOLD_LEVEL.OK
        }
      ],
      tagRules: [
        {
          key: 'check_type',
          value: flags.get(FLAG.ENDPOINT),
          operator: 'equal'
        }
      ],
      type: INFLUX_ENDPOINT_DESTINATION.HTTP
    }
  );
}
