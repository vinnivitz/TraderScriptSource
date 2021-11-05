import { Script } from './../models/script.mode.';
import { ChartService } from './../services/chart.service';
import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Selector, State, StateContext, StateToken } from '@ngxs/store';
import { defer, Observable } from 'rxjs';
import { EmitterAction, Receiver } from '@ngxs-labs/emitter';
import { ChartStateModel } from '../models/chart-state.model';
import * as moment from 'moment';

const AUTH_STATE_TOKEN = new StateToken<ChartStateModel>('chart');
const DEFAULT_STATE = { stock: null, ema: null, rsi: null };

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
  static stock(state: ChartStateModel): any[] {
    return state.stock;
  }

  @Receiver()
  public static onFetchData(
    ctx: StateContext<ChartStateModel>,
    action: EmitterAction<Script>
  ): Observable<any> {
    return defer(async () => {
      const data = this.csvJSON(
        await this.resource.fetchData(action.payload).toPromise()
      );
      if (action.payload.measurement === 'stock') {
        ctx.patchState({ stock: this.createStockObjectArray(data) });
      }
    });
  }

  private static csvJSON(csv: string): object[] {
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

  private static createStockObjectArray(data: any[]): any {
    const time = [];
    const value = [];
    for (const item of data) {
      const date = new Date(item._time);
      time.push(`${this.getTimeFromDate(date)}`);
      value.push(Number(item._value));
    }
    time.pop();
    time.pop();
    value.pop();
    value.pop();
    return { time, value };
  }

  private static getTimeFromDate(date: Date): string {
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${
      s < 10 ? '0' + s : s
    }`;
  }
}
