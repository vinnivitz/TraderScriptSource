import { FLAG, SCRIPT_TYPE } from '../models';
import { globals, replaceInFile } from '../utils';

/**
 * Triggers indicator definition setup depeding on the `type`.
 *
 * @export
 * @param {Map<string, string>} flags antlr flags
 * @returns {*}  {Promise<void>}
 */
export async function setupDefinition(
  flags: Map<string, string>
): Promise<void> {
  const type = flags.get(FLAG.TYPE) as SCRIPT_TYPE;
  switch (type) {
    case SCRIPT_TYPE.EMA:
    case SCRIPT_TYPE.RSI:
      setCommonQueryScript(type, flags);
      break;
    case SCRIPT_TYPE.MACD:
      setMACDQueryScript(flags);
      break;
    case SCRIPT_TYPE.ENDPOINT:
      setEndpoint(flags);
  }
  return Promise.resolve();
}

/**
 * Building the query script for a given indicator `type` and stores the script globally.
 *
 * @param {SCRIPT_TYPE} type type of target indicator
 * @param {Map<string, string>} flags antlr flags
 */
function setCommonQueryScript(
  type: SCRIPT_TYPE,
  flags: Map<string, string>
): void {
  const query = replaceInFile(
    type,
    flags,
    [FLAG.NAME],
    [FLAG.INFLUX_BUCKET, globals.metaData.influxBucket],
    [FLAG.INFLUX_MEASUREMENT, globals.metaData.influxStockMeasurement],
    [FLAG.PRICE_KEY, globals.metaData.defaultPriceKey],
    [FLAG.PERIOD]
  );
  globals.indicators.set(flags.get(FLAG.NAME), {
    type,
    period: flags.get(FLAG.PERIOD),
    data: query
  });
}

/**
 * Building the query script for a MACD inticator and stores the script globally.
 *
 * @param {Map<string, string>} flags antlr flags
 */
function setMACDQueryScript(flags: Map<string, string>): void {
  const ema1_name = flags.get(FLAG.EMA1);
  const ema2_name = flags.get(FLAG.EMA2);
  const query = replaceInFile(
    SCRIPT_TYPE.MACD,
    flags,
    [FLAG.SCRIPT1, globals.indicators.get(ema1_name).data],
    [FLAG.SCRIPT2, globals.indicators.get(ema2_name).data],
    [FLAG.NAME],
    [FLAG.EMA1],
    [FLAG.EMA2],
    [FLAG.INFLUX_ORGANIZATION, globals.metaData.org],
    [FLAG.INFLUX_BUCKET, globals.metaData.influxBucket]
  );
  globals.indicators.set(flags.get(FLAG.NAME), {
    type: SCRIPT_TYPE.MACD,
    data: query
  });
}

/**
 * Stores the endpoint with a spefied url globally.
 *
 * @param {Map<string, string>} flags antlr flags
 */
function setEndpoint(flags: Map<string, string>): void {
  const url = flags.get(FLAG.URL);
  globals.indicators.set(flags.get(FLAG.NAME), {
    type: SCRIPT_TYPE.ENDPOINT,
    data: url
  });
}
