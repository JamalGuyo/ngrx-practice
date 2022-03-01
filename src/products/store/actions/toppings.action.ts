import { Action } from "@ngrx/store";
import { Topping } from "@models/topping.model";

// ACTION CONSTANTS
export const LOAD_TOPPINGS = "[Products] Load Toppings";
export const LOAD_TOPPINGS_FAIL = "[Products] Load Toppings Fail";
export const LOAD_TOPPINGS_SUCCESS = "[Products] Load Toppings Success";

// ACTION CREATORS
export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;
  constructor(public payload: any) {}
}

export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS;
  constructor(public payload: Topping[]) {}
}

// action types
export type ToppingsAction =
  | LoadToppings
  | LoadToppingsFail
  | LoadToppingsSuccess;