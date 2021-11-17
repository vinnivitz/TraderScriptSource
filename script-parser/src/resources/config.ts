import {
  FLAG,
  INFLUX_ENTITY_TYPE,
  TelegrafConfig,
  SCRIPT_TYPE,
  REQUEST_METHOD
} from '../models';
import { spawn, spawnSync } from 'child_process';
import { writeFileSync } from 'fs';
import { globals, createInfluxData, replaceInFile } from '../utils';

/**
 * Sets up the telegraf config for the InfluxDB
 *
 * @export
 * @async
 * @param flags antlr flags
 * @returns {*} {Promise}
 */
export async function setupConfig(flags: Map<string, string>): Promise<void> {
  updateMetadata(flags);

  setStockQueryScript();

  // create new influx bucket
  await createInfluxData(INFLUX_ENTITY_TYPE.BUCKETS, {
    orgID: globals.metaData.orgID,
    name: globals.metaData.influxBucket
  });

  await createTelegrafConfig(flags);
}

/**
 * Updates global meta data with config from user input.
 *
 * @param {ANTLRFlag[]} flags
 */
function updateMetadata(flags: Map<string, string>): void {
  globals.metaData.configName = flags.get(FLAG.NAME);
  globals.metaData.interval = flags.get(FLAG.INTERVAL) ?? '5s';
  globals.metaData.influxBucket = `${flags.get(FLAG.NAME)}_${
    INFLUX_ENTITY_TYPE.BUCKETS
  }`;
}

/**
 * Returns an ready-to-use telegraf config with updated with given parameters.
 *
 * @async
 * @param {string} config telegraf config file
 * @param {ANTLRFlag[]} flags antlr flags
 * @returns {*} Promise
 */
async function createTelegrafConfig(flags: Map<string, string>): Promise<void> {
  createTelegrafExecScript(flags);

  const config = replaceInFile(
    SCRIPT_TYPE.TELEGRAF,
    flags,
    [FLAG.INTERVAL, globals.metaData.interval],
    [FLAG.INFLUX_PORT, globals.metaData.influxPort],
    [FLAG.INFLUX_TOKEN, globals.metaData.influxToken],
    [FLAG.INFLUX_ORGANIZATION, globals.metaData.org],
    [FLAG.INFLUX_BUCKET, globals.metaData.influxBucket],
    [FLAG.SCRIPT1, `${globals.metaData.libDirPath}/telegraf/telegraf.sh`]
  );
  const name = `${flags.get(FLAG.NAME)}_${INFLUX_ENTITY_TYPE.TELEGRAFS}`;
  const result = await createInfluxData<TelegrafConfig>(
    INFLUX_ENTITY_TYPE.TELEGRAFS,
    {
      name,
      orgID: globals.metaData.orgID,
      config
    }
  );
  const configID = result.id;
  runTelegraf(configID);
}

/**
 * Sets global environment variable for telegraf to give access to influx for retrieving config
 * and runs telegraf with given config file
 *
 * @param {string} configID id of telegraf config
 */
function runTelegraf(configID: string): void {
  const cmd = spawn(
    'telegraf',
    [
      '--config',
      `${globals.metaData.influxApiUrl}/${INFLUX_ENTITY_TYPE.TELEGRAFS}/${configID}`
    ],
    {
      env: { ...process.env, ...{ INFLUX_TOKEN: globals.metaData.influxToken } }
    }
  );
  
  cmd.on('error', (error) => {
    throw error.message;
  });

  cmd.on('close', (code) => {
    throw `child process exited with code ${code}`;
  });
}

/**
 * Building the query script for the base data stream and stores it globally.
 *
 * @param {Map<string, string>} flags antlr flags
 * @returns {*}  {string}
 */
function setStockQueryScript(): void {
  const script = replaceInFile(
    SCRIPT_TYPE.STOCK,
    new Map(),
    [FLAG.INFLUX_BUCKET, globals.metaData.influxBucket],
    [FLAG.INFLUX_MEASUREMENT, globals.metaData.influxStockMeasurement],
    [FLAG.PRICE_KEY, globals.metaData.defaultPriceKey]
  );
  globals.indicators.set(FLAG.STOCK, { type: SCRIPT_TYPE.STOCK, data: script });
}

function createTelegrafExecScript(flags: Map<string, string>): void {
  const script = `#! /bin/bash\n\nexport REQUEST_METHOD=${
    flags.get(FLAG.REQUEST_METHOD) ?? REQUEST_METHOD.GET
  }\nexport STOCK_API_URL=${flags.get(
    FLAG.URL
  )}\nexport REQUEST_BASIC_AUTH=${flags.get(
    FLAG.REQUEST_BASIC_AUTH
  )}\nexport REQUEST_HEADERS=${flags.get(
    FLAG.REQUEST_HEADERS
  )}\nexport REQUEST_PARAMS=${flags.get(
    FLAG.REQUEST_PARAMS
  )}\nexport PRICE_KEY=${flags.get(
    FLAG.PRICE_KEY
  )}\nexport INFLUX_STOCK_MEASUREMENT=${
    globals.metaData.influxStockMeasurement
  }\nexport INFLUX_STOCK_FIELD=${globals.metaData.defaultPriceKey}\nnode ${
    globals.metaData.lineprotocolParserPath
  }`;
  writeFileSync(`${globals.metaData.libDirPath}/telegraf/telegraf.sh`, script, {
    flag: 'w'
  });
  spawnSync('chmod', [
    '+x',
    `${globals.metaData.libDirPath}/telegraf/telegraf.sh`
  ]);
}
