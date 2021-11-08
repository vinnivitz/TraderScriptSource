import { Color } from '@angular-material-components/color-picker';
import { INFLUX_FILTER_TYPE } from './influx-filter-type.enum';

export interface InfluxConfig {
  username?: string;
  configName?: string;
  org?: string;
  defs?: { type: INFLUX_FILTER_TYPE; name: string; period?: string, color?: Color, rgbColor?: string, show: boolean }[];
  range?: string;
  interval?: number;
  measurement?: string;
}
