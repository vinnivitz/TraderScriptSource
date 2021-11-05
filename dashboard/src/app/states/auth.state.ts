import { SignUp } from './../models/signup.model';
import { AuthService } from './../services/auth.service';
import { AuthStateModel } from './../models/auth-state.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Selector, State, StateContext, StateToken } from '@ngxs/store';
import { defer, Observable } from 'rxjs';
import { EmitterAction, Receiver } from '@ngxs-labs/emitter';
import { SignIn } from '../models/signin.model';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';

const AUTH_STATE_TOKEN = new StateToken<AuthStateModel>('auth');
const DEFAULT_STATE = {
  username: null,
  token: null,
  org: null,
  config: null
};
@State<AuthStateModel>({
  name: AUTH_STATE_TOKEN,
  defaults: DEFAULT_STATE
})
@Injectable({ providedIn: 'root' })
export class AuthState {
  private static resource: AuthService;
  private static ngZone: NgZone;
  private static router: Router;

  constructor(inj: Injector) {
    AuthState.resource = inj.get(AuthService);
    AuthState.ngZone = inj.get(NgZone);
    AuthState.router = inj.get(Router);
  }

  @Selector()
  static isLoggedIn(state: AuthStateModel): boolean {
    return !!state.token;
  }

  @Selector()
  static token(state: AuthStateModel): string {
    return state.token;
  }

  @Selector()
  static username(state: AuthStateModel): string {
    return state.username;
  }

  @Selector()
  static org(state: AuthStateModel): string {
    return state.org;
  }

  @Selector()
  static config(state: AuthStateModel): string {
    return state.config;
  }

  @Receiver()
  static onSignIn(
    ctx: StateContext<AuthStateModel>,
    action: EmitterAction<SignIn>
  ): Observable<any> {
    const token = action.payload.token;
    const org = action.payload.org;
    const config = action.payload.config;
    return defer(async () => {
      ctx.patchState({ token, org, config });
      const user = await this.resource.getUser().toPromise();
      ctx.patchState({ username: user.name });
      this.ngZone.run(() => this.router.navigateByUrl('dashboard'));
    });
  }

  @Receiver()
  static onLogout(ctx: StateContext<AuthStateModel>): void {
    ctx.setState(DEFAULT_STATE);
    this.ngZone.run(() => this.router.navigateByUrl('login'));
  }
}
