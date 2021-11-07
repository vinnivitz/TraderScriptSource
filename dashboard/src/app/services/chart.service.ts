import { Store } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Script } from '../models/script.mode.';
import { AuthState } from '../states/auth.state';

@Injectable({ providedIn: 'root' })
export class ChartService {
  private readonly BASE_URL = 'http://localhost:8086/api/v2';

  constructor(private http: HttpClient, private store: Store) {}

  public fetchData(query: string): Observable<any> {
    const org = this.store.selectSnapshot(AuthState.org);
    return this.http.post(
      `${this.BASE_URL}/query`,
      { query },
      { params: { org }, responseType: 'text' }
    );
  }
}
