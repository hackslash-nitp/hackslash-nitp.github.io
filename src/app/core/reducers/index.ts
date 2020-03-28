import { RouterStateSnapshot } from '@angular/router';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';

export interface State {
  router: RouterReducerState<RouterStateSnapshot>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
};

export const metaReducers: MetaReducer</*State*/ any>[] = [logActions];

export function logActions(reducer: ActionReducer</*State*/ any>) {
  return (state, action) =>
    reducer(state, action);
}
