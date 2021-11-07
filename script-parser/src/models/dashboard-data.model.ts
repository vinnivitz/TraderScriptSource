/**
 * Type for dashboard config where needed data from user config is stored.
 */
export interface DashboardData {
  username?: string;
  configName?: string;
  defs?: { name: string; type: string }[];
}
