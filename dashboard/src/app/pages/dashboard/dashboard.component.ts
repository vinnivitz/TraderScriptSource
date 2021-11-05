import { Script } from './../../models/script.mode.';
import { ChartState } from './../../states/chart.state';
import { Emittable, Emitter } from '@ngxs-labs/emitter';
import { AuthState } from './../../states/auth.state';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { Chart, registerables } from 'chart.js';
import { ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  type = 'line';
  data: any;
  options = { animation: { duration: 0 } };
  showChart = false;
  showStockPrice = true;
  showEmaPrice = false;
  showData = {
    stock: true,
    ema: false,
    rsi: false,
    macd: false
  };
  form: FormGroup = new FormGroup({
    interval: new FormControl(5, [Validators.required])
  });
  @Select(AuthState.username) username: Observable<string>;
  @Select(ChartState.stock) stock: Observable<any>;

  @Emitter(ChartState.onFetchData) onFetchData: Emittable<Script>;
  @Emitter(AuthState.onLogout) onLogout: Emittable<void>;

  @ViewChild('chart', { static: true }) canvas: ElementRef<HTMLCanvasElement>;

  constructor(store: Store) {
    const bucket = store.selectSnapshot(AuthState.config);
    setInterval(() => {
      if (this.showStockPrice) {
        this.onFetchData.emit({ bucket, measurement: 'stock' });
      }
      if (this.showEmaPrice) {
        this.onFetchData.emit({ bucket, measurement: 'ema' });
      }
    }, 5000);
    this.stock.subscribe((data) => {
      if (data?.value.length > 1) {
        this.showChart = true;
        this.data = {
          labels: data.time,
          datasets: [{ label: 'Stock', data: data.value }]
        };
      }
    });
  }

  ngOnInit(): void {}

  logout(): void {
    this.onLogout.emit();
  }
}
