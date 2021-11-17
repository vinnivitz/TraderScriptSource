import { DashboardData } from './models/dashboard-data.model';
import { CharStreams, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import { readFileSync, writeFileSync } from 'fs';
import { ANTLRTree, COMMAND, FLAG, SCRIPT_TYPE } from './models';
import { InfluxLexer, InfluxParser, CustomInfluxVisitor } from './lib/antlr';
import { authenticate, setupDefinition, setupIndicators } from './resources';
import {
  executeSequentially,
  extractPeriodNumberFromString,
  globals
} from './utils';
import axios from 'axios';
import { setupConfig } from './resources/config';

/**
 * Fetches the user script parses the tree and executes the programm.
 *
 * @async
 * @returns {*}  {Promise<void>}
 */
async function init(): Promise<void> {
  try {
    initAxios();
    initMetaData();
    // reads script from user
    const input = readFileSync(globals.metaData.scriptFilePath).toString();
    const tree = getANTLRTree(input);
    await execRequests(tree);
    createDashboardConfigFile();
    console.log(`Parsing successfully finished.`);
  } catch (err) {
    console.log(`Parsing failed.\nError: ${err}`);
  }
}

/**
 * Triggers the command functions depending on the `command` term in a sequential manner.
 *
 * @param {ANTLRTree} tree antlr tree object
 * @returns {*}  {Promise<void>}
 */
async function execRequests(tree: ANTLRTree): Promise<void> {
  await executeSequentially(tree, async (leaf) => {
    const command = leaf[0];
    const flags = leaf[1];
    switch (command) {
      case COMMAND.AUTH:
        await authenticate(flags);
        console.log('User authenticated to InfluxDB.');
        break;
      case COMMAND.CONFIG:
        await setupConfig(flags);
        console.log('Telegraf is running successfully.');
        break;
      case COMMAND.DEFINITION:
        await setupDefinition(flags);
        console.log(`Setup definition ${flags.get(FLAG.NAME)}.`);
        break;
      case COMMAND.CONDITION:
        await setupIndicators(flags);
        console.log(
          `Setup indicator action to endpoint ${flags.get(FLAG.ENDPOINT)}.`
        );
        break;
      default:
        await Promise.reject(`Command ${command} not valid.`);
        break;
    }
  });
}

/**
 * Processes the `input` string to a `ANTLRTree` object.
 *
 * @param {string} input input file content
 * @returns {*}  {ANTLRTree}
 */
function getANTLRTree(input: string): ANTLRTree {
  const chars = CharStreams.fromString(input);
  const lexer = new InfluxLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new InfluxParser(tokens);
  parser.addErrorListener({
    syntaxError() {
      throw 'Syntax error in config script.';
    }
  });
  const visitor = new CustomInfluxVisitor();
  const tree: ParserRuleContext = parser.influx();
  return visitor.visit(tree);
}

/**
 * Configurates the request interceptor for handling errors and add retry for signin request action 3 times.
 *
 */
function initAxios(): void {
  axios.interceptors.response.use(
    (response) => response,
    (error) =>
      Promise.reject(
        error.response?.data.message ?? 'Connection to InfluxDB lost!'
      )
  );
}

/**
 * Init some meta data with environment vars or defaults.
 *
 */
function initMetaData(): void {
  globals.metaData.influxOffset = process.env.INFLUX_OFFSET ?? '1s';
  globals.metaData.influxStockMeasurement = 'base';
  globals.metaData.influxApiUrl =
    process.env.INFLUX_API_URL ?? 'http://localhost:8086/api/v2';
  globals.metaData.defaultPriceKey = 'price';
  globals.metaData.lineprotocolParserPath =
    process.env.LINEPROTOCOL_PARSER_PATH ?? '/home/lineprotocol-parser.js';
  globals.metaData.influxPort = process.env.INFLUX_PORT ?? '8086';
  globals.metaData.scriptFilePath =
    process.env.SCRIPT_FILE_PATH ?? '/home/config.txt';
  globals.metaData.libDirPath =
    process.env.SCRIPT_PARSER_LIB_DIR_PATH ?? '/home/lib';
}

/**
 * Creates the config script for the dashboard and stores it in the assets directory of the dashboard.
 *
 */
function createDashboardConfigFile(): void {
  const defs = [...globals.indicators.entries()]
    .filter(([_, value]) => value.type !== SCRIPT_TYPE.ENDPOINT)
    .map(([key, value]) => ({
      name: key,
      type: value.type,
      period: value?.period
    }));
  const config: DashboardData = {
    org: globals.metaData.org,
    configName: globals.metaData.configName,
    interval: extractPeriodNumberFromString(globals.metaData.interval),
    measurement: globals.metaData.influxStockMeasurement,
    token: globals.metaData.influxToken,
    username: globals.metaData.username,
    offset: extractPeriodNumberFromString(globals.metaData.influxOffset),
    defs
  };
  writeFileSync(
    `${process.env.DASHBOARD_PATH ?? '/home/dashboard'}/assets/config.json`,
    JSON.stringify(config)
  );
}

// run program
init();
