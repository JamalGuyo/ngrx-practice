import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";
import * as fromPizzas from "./pizzas.reducer";

// product state
export interface ProductState {
  pizzas: fromPizzas.PizzaState;
}

// reducers
export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizzas.reducer,
};

// selectors
export const getProductState = createFeatureSelector<ProductState>("products");

export const getPizzaState = createSelector(
  getProductState,
  (state: ProductState) => state.pizzas
);

export const getPizzasEntities = createSelector(
  getPizzaState,
  (state: fromPizzas.PizzaState) => state.entities
);

export const getAllPizzas = createSelector(getPizzasEntities, (entities) =>
  Object.keys(entities).map((id) => entities[parseInt(id, 10)])
);

export const getPizzasLoading = createSelector(
  getPizzaState,
  (state: fromPizzas.PizzaState) => state.loading
);

export const getPizzasLoaded = createSelector(
  getPizzaState,
  (state: fromPizzas.PizzaState) => state.loaded
);
