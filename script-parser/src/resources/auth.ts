import { Authorization, FLAG } from '../models';
import axios from 'axios';
import { globals } from '../utils';

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
}
