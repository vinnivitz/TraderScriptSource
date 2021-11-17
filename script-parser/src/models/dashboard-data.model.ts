import { SCRIPT_TYPE } from './definitions.model';
/**
 * Type for dashboard config where needed data from user config is stored.
 */
export interface DashboardData {
  org?: string;
  configName?: string;
  defs?: { name: string; type: SCRIPT_TYPE; period: string }[];
  interval?: number;
  measurement?: string;
  token?: string;
  username?: string;
  offset?: number;
}
