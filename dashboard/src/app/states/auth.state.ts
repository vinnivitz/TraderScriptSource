import { AuthStateModel } from './../models/auth-state.model';
import { Injectable, Injector } from '@angular/core';
import { Selector, State, StateContext, StateToken } from '@ngxs/store';
import { defer, Observable } from 'rxjs';
import { EmitterAction, Receiver } from '@ngxs-labs/emitter';
import { SignIn } from '../models/signin.model';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';

const AUTH_STATE_TOKEN = new StateToken<AuthStateModel>('auth');
const DEFAULT_STATE = {
  token: null
};
@State<AuthStateModel>({
  name: AUTH_STATE_TOKEN,
  defaults: DEFAULT_STATE
})
@Injectable({ providedIn: 'root' })
export class AuthState {
  private static ngZone: NgZone;
  private static router: Router;

  constructor(inj: Injector) {
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

  @Receiver()
  static onSignIn(
    ctx: StateContext<AuthStateModel>,
    action: EmitterAction<SignIn>
  ): Observable<any> {
    const token = action.payload.token;
    return defer(async () => {
      ctx.patchState({ token });
      this.ngZone.run(() => this.router.navigateByUrl('dashboard'));
    });
  }

  @Receiver()
  static onLogout(ctx: StateContext<AuthStateModel>): void {
    ctx.setState(DEFAULT_STATE);
    this.ngZone.run(() => this.router.navigateByUrl('login'));
  }
}
