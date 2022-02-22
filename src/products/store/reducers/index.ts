import { ActionReducerMap } from "@ngrx/store";
import * as fromPizzas from "./pizzas.reducer";

// product state
export interface ProductState {
  pizzas: fromPizzas.PizzaState;
}

// reducers
export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizzas.reducer,
};
