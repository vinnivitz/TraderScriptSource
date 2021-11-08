import { EmitterAction } from '@ngxs-labs/emitter';
import { getActionTypeFromInstance, NgxsNextPluginFn } from '@ngxs/store';
export function logoutPlugin(state: any, action: EmitterAction, next: NgxsNextPluginFn) {
  // Use the get action type helper to determine the type
  if (getActionTypeFromInstance(action).includes('AuthState.onLogout')) {
    // if we are a logout type, lets erase all the state
    state = {};
  }
  // return the next function with the empty state
  return next(state, action);
}
