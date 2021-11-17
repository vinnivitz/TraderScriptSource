import { DashboardNotification } from './../models/dashboard-notification.model';
import { INFLUX_FILTER_TYPE } from './../models/influx-filter-type.enum';
import { InfluxConfig } from './../models/influx-config.model';
import { ChartService } from './../services/chart.service';
import { Injectable, Injector } from '@angular/core';
import { Selector, State, StateContext, StateToken } from '@ngxs/store';
import { defer, Observable } from 'rxjs';
import { EmitterAction, Receiver } from '@ngxs-labs/emitter';
import { ChartStateModel } from '../models/chart-state.model';
import { InfluxChartData } from '../models/influx-chart-data.model';
import { ChartData } from 'chart.js';
import { InfluxNotification } from '../models/influx-notification.model';

const AUTH_STATE_TOKEN = new StateToken<ChartStateModel>('chart');
const DEFAULT_STATE = {
  data: { datasets: [], labels: [] },
  config: null,
  notifications: []
};

@State<ChartStateModel>({
  name: AUTH_STATE_TOKEN,
  defaults: DEFAULT_STATE
})
@Injectable({ providedIn: 'root' })
export class ChartState {
  private static resource: ChartService;

  constructor(inj: Injector) {
    ChartState.resource = inj.get(ChartService);
  }

  @Selector()
  static data(state: ChartStateModel): ChartData {
    return JSON.parse(JSON.stringify(state.data ?? null));
  }

  @Selector()
  static config(state: ChartStateModel): InfluxConfig {
    return state.config;
  }

  @Selector()
  static notifications(state: ChartStateModel): DashboardNotification[] {
    return state.notifications;
  }

  @Receiver()
  static onFetchData(
    ctx: StateContext<ChartStateModel>,
    action: EmitterAction<InfluxConfig>
  ): Observable<ChartData> {
    return defer(async () => {
      const config = action.payload;
      ctx.patchState({
        config
      });
      const data: ChartData = { datasets: [] };
      let query = `from(bucket: \"${config.configName}_buckets\")\n|>range(start: -${config.range})`;
      data.labels = await this.getLabels(config, query);
      await this.executeSequentially(config.defs, async (def) => {
        if (def.show) {
          switch (def.type) {
            case INFLUX_FILTER_TYPE.STOCK:
              query = `${query}\n|>filter(fn: (r) => r._measurement == \"${config.measurement}\")`;
              break;
            case INFLUX_FILTER_TYPE.EMA:
              query = `${query}\n|>filter(fn: (r) => r._measurement == \"${
                config.measurement
              }\")\n|>exponentialMovingAverage(n: ${def.period})`;
              break;
            case INFLUX_FILTER_TYPE.RSI:
              query = `${query}\n|>filter(fn: (r) => r._measurement == \"${config.measurement}\")\n|>relativeStrengthIndex(n: ${def.period})`;
              break;
            case INFLUX_FILTER_TYPE.MACD:
              query = `${query}\n|>filter(fn: (r) => r._measurement == \"macd\" and r._field == \"${def.name}\")`;
              break;
            default:
              break;
          }
          const queryResult = this.csvJSON<InfluxChartData>(
            await this.resource.fetchData(config.org, query).toPromise()
          );
          const dataValues = this.getData(queryResult);
          data.datasets.push({
            label: def.name,
            data: dataValues.slice(0, dataValues.length - 2),
            borderColor: def.color.toHexString(),
            backgroundColor: 'rgba(0, 0, 0, 0)'
          });
        }
      });
      ctx.patchState({
        data,
        config,
        notifications: await this.getNotifications(config)
      });
      return data;
    });
  }

  private static csvJSON<T>(csv: string): T[] {
    const lines = csv.split('\n');
    const result = [];
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentline = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }
    return result;
  }

  private static async getLabels(
    config: InfluxConfig,
    query: string
  ): Promise<string[]> {
    const data = this.csvJSON<InfluxChartData>(
      await this.resource
        .fetchData(
          config.org,
          `${query}\n|>filter(fn: (r) => r._measurement == \"${config.measurement}\")`
        )
        .toPromise()
    );
    return data
      .map((item) => this.getTimeFromDate(new Date(item._time)))
      .slice(0, data.length - 2);
  }

  private static async getNotifications(
    config: InfluxConfig
  ): Promise<DashboardNotification[]> {
    const notifications = this.csvJSON<InfluxNotification>(
      await this.resource
        .fetchData(
          config.org,
          `from(bucket: \"_monitoring\")\n|>range(start: -100m)\n|>filter(fn: (r) => r._measurement == \"notifications\" and r._field == \"_message\")`
        )
        .toPromise()
    );
    return notifications
      .slice(0, notifications.length - 2)
      .map((notification, i) => ({
        number: ++i,
        name: notification['check_type\r'].substring(
          0,
          notification['check_type\r'].length - 2
        ),
        time: this.getTimeFromDate(new Date(notification._time)),
        description: notification._value,
        sent: notification._sent
      }));
  }

  private static getData(data: InfluxChartData[]): number[] {
    return data.map((item) => Number(item._value));
  }

  private static getTimeFromDate(date: Date): string {
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${
      s < 10 ? '0' + s : s
    }`;
  }

  private static async executeSequentially<T>(
    items: T[],
    handler: (e: T) => Promise<any>
  ): Promise<void> {
    for (const item of items) {
      await handler(item);
    }
  }
}
