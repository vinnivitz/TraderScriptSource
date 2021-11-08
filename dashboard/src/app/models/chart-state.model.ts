import { ChartData } from 'chart.js';
import { DashboardNotification } from './dashboard-notification.model';
import { InfluxConfig } from './influx-config.model';
export interface ChartStateModel {
  data?: ChartData;
  config?: InfluxConfig;
  notifications: DashboardNotification[];
}
