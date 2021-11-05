import { AuthState } from './../states/auth.state';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthService } from '../services/auth.service';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private store: Store) {}

  canActivate(): boolean {
    if (!this.store.selectSnapshot(AuthState.isLoggedIn)) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
