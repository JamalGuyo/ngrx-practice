import {
  ActivatedRouteSnapshot,
  Params,
  RouterStateSnapshot,
} from "@angular/router";
import * as fromRouter from "@ngrx/router-store";
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

// STATE OF OUR rootReducer is defined here
export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

// INTERFACE STATE OF ALL THE REDUCERS
export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

// REGISTER REDUCERS HERE
export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
};

// SELECTORS
export const getRouterState =
  createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>(
    "routerReducer"
  );

// CUSTOM SERIALIZER
export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl>
{
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}
