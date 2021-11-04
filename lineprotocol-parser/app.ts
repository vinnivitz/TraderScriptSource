import axios, { Method } from 'axios';

// get params from the env vars passed through the telegraf input exec plugin to the docker env
const method = process.env.REQUEST_METHOD as Method;
const url = process.env.STOCK_API_URL;
const basic_auth = process.env.REQUEST_BASIC_AUTH;
const headers =
  process.env.REQUEST_HEADERS !== 'undefined' && !!process.env.REQUEST_HEADERS
    ? JSON.parse(process.env.REQUEST_HEADERS)
    : undefined;
const params =
  process.env.REQUEST_PARAMS !== 'undefined' && !!process.env.REQUEST_PARAMS
    ? JSON.parse(process.env.REQUEST_PARAMS)
    : undefined;
const price_key = process.env.PRICE_KEY;
const measurement = process.env.INFLUX_STOCK_MEASUREMENT;
const field = process.env.INFLUX_STOCK_FIELD;

/**
 * Sends a request to the provided API endpoint with given config params.
 *
 * @return {*}  {Promise<string>}
 */
async function fetch(): Promise<void> {
  const response = await axios({
    method,
    url,
    headers: { ...headers, ...{ Authentication: `Basic ${basic_auth}` } },
    params
  });
  const data = Array.isArray(response.data)
    ? response.data[response.data.length - 1]
    : response.data;
  const result = convertToLineProtocol(data);
  console.log(result);
}

/**
 * Converts the input data from the API endpoint to the Influx line protocol with given parameters.
 *
 * @param {any} data
 * @return {*} {string}
 */
function convertToLineProtocol(data: any): string {
  return `${measurement} ${field}=${getValue(data, price_key)} ${
    new Date().getTime() * 1000000
  }`;
}

/**
 * Extracts value of a sub key by a given `path`.
 *
 * @param {*} obj object to extract value from
 * @param {string} path key path with dots as seperators
 * @return {*}
 */
function getValue(obj: any, path: string): number {
  return path.split('.').reduce((o, d) => o[d], obj);
}

fetch();
