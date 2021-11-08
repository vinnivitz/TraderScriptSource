import { Store } from '@ngxs/store';
import { Color } from '@angular-material-components/color-picker';
import { AuthService } from './auth.service';
import { InfluxConfig } from './../models/influx-config.model';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, defer } from 'rxjs';
import { INFLUX_FILTER_TYPE } from '../models/influx-filter-type.enum';
import { ChartState } from '../states/chart.state';

@Injectable({
  providedIn: 'root'
})
export class ConfigResolverService implements Resolve<InfluxConfig> {
  constructor(private authService: AuthService, private store: Store) {}

  resolve(): Observable<InfluxConfig> {
    return defer(async () => {
      const config = await this.authService.getConfig().toPromise();
      const storedConfig = this.store.selectSnapshot(ChartState.config);
      config.defs.unshift({
        name: 'stock',
        type: INFLUX_FILTER_TYPE.STOCK,
        show: true
      });
      config.defs = config.defs.map((def) => {
        const storedDef = storedConfig?.defs.find(
          (item) => item.name === def.name
        );
        return {
          ...def,
          color: storedDef?.color
            ? new Color(storedDef.color.r, storedDef.color.g, storedDef.color.b)
            : this.getRandomColor(),
          show: storedDef?.show ?? true
        };
      });
      config.interval = storedConfig?.interval ?? 5;
      config.range = storedConfig?.range ?? '5m';
      return config;
    });
  }

  private getRandomColor(): Color {
    return new Color(
      Math.round(Math.random() * 255),
      Math.round(Math.random() * 255),
      Math.round(Math.random() * 255)
    );
  }
}
