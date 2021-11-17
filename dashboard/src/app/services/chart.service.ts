import { Store } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfluxConfig } from '../models/influx-config.model';
import { InfluxChartData } from '../models/influx-chart-data.model';

@Injectable({ providedIn: 'root' })
export class ChartService {
  private readonly BASE_URL = 'http://localhost:8086/api/v2';

  constructor(private http: HttpClient, private store: Store) {}

  fetchData(org: string, query: string): Observable<any> {
    return this.http.post<any>(
      `${this.BASE_URL}/query`,
      { query },
      { params: { org }, responseType: 'text' as 'json' }
    );
  }

  getConfig(): Observable<InfluxConfig> {
    return this.http.get('assets/config.json', { responseType: 'json' });
  }
}
