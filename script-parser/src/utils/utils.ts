import axios from 'axios';
import { FLAG, INFLUX_ENTITY_TYPE, SCRIPT_TYPE } from '../models';
import { readFileSync } from 'fs';
import { globals } from './globals';

/**
 * Iterates over a given array of promises and executes every promise sequentially.
 *
 * @export
 * @async
 * @param items array of items to iterate
 * @param handler handler to execute a Promise
 * @returns {*} Promise
 */
export async function executeSequentially<T>(
  items: T[],
  handler: (e: T) => Promise<any>
): Promise<void> {
  for (const item of items) {
    await handler(item);
  }
}

/**
 * Creates a new InfluxDb entitiy of given `type` and returns it.
 *
 * @export
 * @async
 * @template T
 * @param {INFLUX_ENTITY_TYPE} type entity type like bucket, task, etc.
 * @param {object} requestBody data of new influx entity
 * @return {*}  {Promise<T>}
 */
export async function createInfluxData<
  T extends { name?: string; id?: string }
>(type: INFLUX_ENTITY_TYPE, requestBody: object): Promise<T> {
  return (
    await axios.post(`${globals.metaData.influxApiUrl}/${type}`, requestBody)
  )?.data;
}

/**
 * Fetches the script by given `type` and replaces every given string
 * with the provided value extracted from the flag map and returns the file.
 * If the flag does not exist the default value is chosen and otherwise `undefined`.
 *
 * @export
 * @param {string} file file with placeholders in string representation
 * @param {...string[]} args values to replace with
 * @return {*}  {string}
 */
export function replaceInFile(
  type: SCRIPT_TYPE,
  flags: Map<string, string>,
  ...args: string[][]
): string {
  let file =
    type === SCRIPT_TYPE.TELEGRAF
      ? readFileSync(
          `${globals.metaData.libDirPath}/telegraf/telegraf.conf`
        ).toString()
      : getScriptByType(type);
  args.forEach((arg) => {
    file = file
      .split(`+++${arg[0]}+++`)
      .join(flags.get(arg[0]) ?? (arg.length === 2 ? arg[1] : 'undefined'));
  });
  return type === SCRIPT_TYPE.DOWNSAMPLING
    ? sanitizeDuplicateIdentifier(flags.get(FLAG.INDICATOR2), file)
    : file;
}

/**
 * Extracts the period from a period string representation.
 *
 * @export
 * @param {string} period string representation of period
 * @returns {*}  {number}
 */
export function extractPeriodNumberFromString(period: string): number {
  return Number(period.slice(0, -1));
}

/**
 * Checks given flux script for duplicate identifiers and in case adds random string to the identifier.
 *
 * @param {string} name name of identifier to check
 * @param {string} file string representation of flux script
 * @returns {*}  {string}
 */
function sanitizeDuplicateIdentifier(name: string, file: string): string {
  let count = 0;
  const rand = (Math.random() + 1).toString(36).substring(2);
  const regex = new RegExp(name, 'g');
  return file.replace(regex, (match) =>
    ++count > 2 ? `${match}_${rand}` : match
  );
}

/**
 * Fetches the flux script by the given `type` and returns its string representation.
 *
 * @param {SCRIPT_TYPE} type script type
 * @returns {*}  {string}
 */
function getScriptByType(type: SCRIPT_TYPE): string {
  return readFileSync(
    `${globals.metaData.libDirPath}/flux-scripts/${type}.flux`
  ).toString();
}
