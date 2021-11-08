/**
 * Type for dashboard config where needed data from user config is stored.
 */
export interface DashboardData {
  username?: string;
  org?: string;
  configName?: string;
  defs?: { name: string; type: string; period: string }[];
}
