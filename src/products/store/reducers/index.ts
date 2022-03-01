import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromPizzas from "./pizzas.reducer";
import * as fromToppings from "./toppings.reducer";

// product state
export interface ProductState {
  pizzas: fromPizzas.PizzaState;
  toppings: fromToppings.ToppingsState;
}

// reducers
export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizzas.reducer,
  toppings: fromToppings.reducer,
};

// Feature selectors
export const getProductState = createFeatureSelector<ProductState>("products");
