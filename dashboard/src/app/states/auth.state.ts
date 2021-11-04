import { SignUp } from './../models/signup.model';
import { AuthService } from './../services/auth.service';
import { AuthStateModel } from './../models/auth-state.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { State, StateContext, StateToken } from '@ngxs/store';
import { defer, Observable } from 'rxjs';
import { EmitterAction, Receiver } from '@ngxs-labs/emitter';
import { SignIn } from '../models/signin.model';

const AUTH_STATE_TOKEN = new StateToken<AuthStateModel>('auth');

@State<AuthStateModel>({
  name: AUTH_STATE_TOKEN,
  defaults: {
    username: null,
  },
})
@Injectable({ providedIn: 'root' })
export class AuthState {
  private static resource: AuthService;

  constructor(inj: Injector) {
    AuthState.resource = inj.get(AuthService);
  }

  @Receiver()
  public static onSignUp(
    ctx: StateContext<AuthStateModel>,
    action: EmitterAction<SignUp>
  ): Observable<any> {
    return this.resource.signUp(action.payload);
  }

  @Receiver()
  public static onSignIn(
    ctx: StateContext<AuthStateModel>,
    action: EmitterAction<SignIn>
  ): Observable<any> {
    return this.resource.signIn(action.payload);
  }
}
