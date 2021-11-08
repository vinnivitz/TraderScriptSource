import { ChartData } from 'chart.js';
import { InfluxConfig } from './influx-config.model';
export interface ChartStateModel {
  data?: ChartData;
  config?: InfluxConfig;
}
