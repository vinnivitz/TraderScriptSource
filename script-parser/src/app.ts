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
  initAxios();

  initMetaData();

  // reads script from user
  try {
    const input = readFileSync(globals.metaData.scriptFilePath).toString();
    const tree = getANTLRTree(input);
    await execRequests(tree);
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
  const dashboardData: DashboardData = { defs: [] };
  await executeSequentially(tree, async (leaf) => {
    const command = leaf[0];
    const flags = leaf[1];
    switch (command) {
      case COMMAND.AUTH:
        await authenticate(flags);
        dashboardData.username = flags.get(FLAG.USERNAME);
        dashboardData.org = flags.get(FLAG.INFLUX_ORGANIZATION);
        console.log('User authenticated to InfluxDB.');
        break;
      case COMMAND.CONFIG:
        await setupConfig(flags);
        dashboardData.configName = flags.get(FLAG.NAME);
        console.log('Telegraf is running successfully.');
        break;
      case COMMAND.DEFINITION:
        await setupDefinition(flags);
        const type = flags.get(FLAG.TYPE);
        if (type !== SCRIPT_TYPE.ENDPOINT) {
          dashboardData.defs.push({
            name: flags.get(FLAG.NAME),
            type: flags.get(FLAG.TYPE),
            period: flags.get(FLAG.PERIOD)
          });
        }
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
  dashboardData.interval = extractPeriodNumberFromString(
    globals.metaData.interval
  );
  dashboardData.measurement = globals.metaData.influxStockMeasurement;
  writeFileSync(
    `${process.env.DASHBOARD_PATH ?? '/home/dashboard'}/assets/config.json`,
    JSON.stringify(dashboardData)
  );
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

// run program
init();
