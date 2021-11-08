import { ChartState } from './../../states/chart.state';
import { Emittable, Emitter } from '@ngxs-labs/emitter';
import { AuthState } from './../../states/auth.state';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { Chart, registerables, ChartData } from 'chart.js';
import { ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfluxConfig } from 'src/app/models/influx-config.model';
import { Color } from '@angular-material-components/color-picker';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  config: InfluxConfig;
  type = 'line';
  options = { animation: { duration: 1 } };
  panel: { name: string; expanded: boolean }[];
  rangeOptions = [
    '1m',
    '2m',
    '5m',
    '10m',
    '30m',
    '1h',
    '2h',
    '5h',
    '10h',
    '1d',
    '2d'
  ];

  @Select(ChartState.data) data: Observable<ChartData>;

  @Emitter(ChartState.onFetchData) onFetchData: Emittable<any>;
  @Emitter(AuthState.onLogout) onLogout: Emittable<void>;

  @ViewChild('chart', { static: true }) canvas: ElementRef<HTMLCanvasElement>;

  constructor(activatedRoute: ActivatedRoute) {
    this.config = activatedRoute.snapshot.data.config;
    this.panel = this.config.defs.map((def) => {
      return { name: def.name, expanded: false };
    });
    setInterval(() => this.onFetchData.emit(this.config), this.config.interval * 1000);
  }

  ngOnInit(): void {}

  logout(): void {
    this.onLogout.emit();
  }

  updateColor(color: Color, name: string): void {
    this.config = { ...this.config };
    this.config.defs = this.config.defs.map((def) =>
      def.name === name ? { ...def, color } : def
    );
  }

  toggleCheckbox(name: string): void {
    this.config = { ...this.config };
    this.config.defs = this.config.defs.map((def) =>
      def.name === name ? { ...def, show: !def.show } : def
    );
  }

  setRange(range: string): void {
    this.config = { ...this.config };
    this.config.range = range;
  }
}
