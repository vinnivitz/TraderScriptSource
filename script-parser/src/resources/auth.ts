import { INFLUX_SYSTEM_BUCKET } from './../models/influx-system-bucket.enum';
import { INFLUX_BUCKET_TYPE } from './../models/influx-bucket-type.enum';
import { InfluxBucket } from './../models/influx-bucket.model';
import { Authorization, FLAG, INFLUX_ENTITY_TYPE } from '../models';
import axios from 'axios';
import { executeSequentially, globals } from '../utils';
import { InfluxEntity } from '../models/influx-entity.model';

/**
 * Executes authentication process.
 *
 * @export
 * @asnyc
 * @param {ANTLRFlag[]} flags antlr flags
 * @return {*}  {Promise<void>}
 */
export async function authenticate(flags: Map<string, string>): Promise<void> {
  const username = flags.get(FLAG.USERNAME);
  const password = flags.get(FLAG.PASSWORD);
  const organization = flags.get(FLAG.INFLUX_ORGANIZATION);

  // get cookie and set it for further requests
  const cookie = await signin(username, password);
  axios.defaults.headers.common = { Cookie: cookie };
  await updateMetaData(organization);
  await cleanupInflux();
}

/**
 * Signs in to InfluxDB with basic auth and returns the session cookie.
 *
 * @param {string} username
 * @param {string} password
 * @return {*}  {Promise<string>}
 */
async function signin(username: string, password: string): Promise<string> {
  return (
    await axios.post(
      `${globals.metaData.influxApiUrl}/signin`,
      {},
      { auth: { username, password } }
    )
  )?.headers['set-cookie'][0];
}

/**
 * Gets user metadata from influxdb and stores it to global object.
 *
 * @async
 * @param {string} organization name of influxdb organization
 * @return {*}  {Promise<void>}
 */
async function updateMetaData(organization: string): Promise<void> {
  const authorizations: Authorization[] = (
    await axios.get(`${globals.metaData.influxApiUrl}/authorizations`)
  )?.data.authorizations;
  const authorization = authorizations?.find(
    (auth) => auth.org === organization
  );
  if (!authorization) {
    throw `Organization ${organization} does not exist.`;
  }
  globals.metaData.orgID = authorization.orgID;
  globals.metaData.influxToken = authorization.token;
  globals.metaData.org = authorization.org;
  globals.metaData.username = authorization.user;
}

/**
 * Removes all configurations, buckets, tasks and alert related entries from InfluxDB
 * to avoid complications with new inserted entries.
 *
 * @async
 * @returns {*}  {Promise<void>}
 */
async function cleanupInflux(): Promise<void> {
  const entities = Object.values(INFLUX_ENTITY_TYPE);
  await executeSequentially(entities, async (entity) => {
    const list: InfluxEntity[] = (
      await axios.get(`${globals.metaData.influxApiUrl}/${entity}`, {
        params: { orgID: globals.metaData.orgID }
      })
    ).data[entity === INFLUX_ENTITY_TYPE.TELEGRAFS ? 'configurations' : entity];
    await executeSequentially(list, async (item) => {
      if ((item as InfluxBucket)?.type !== INFLUX_BUCKET_TYPE.SYSTEM) {
        await axios.delete(
          `${globals.metaData.influxApiUrl}/${entity}/${item.id}`
        );
      }
    });
  });
  const date = new Date();
  await axios.post(
    `${globals.metaData.influxApiUrl}/delete`,
    {
      start: '1970-01-01T00:00:00Z',
      stop: `${date.getFullYear()}-${
        date.getMonth() + 1 < 10
          ? '0' + date.getMonth() + 1
          : date.getMonth() + 1
      }-${
        date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      }T23:59:59Z`
    },
    {
      params: {
        bucket: INFLUX_SYSTEM_BUCKET.MONITORING,
        org: globals.metaData.org
      }
    }
  );
}
