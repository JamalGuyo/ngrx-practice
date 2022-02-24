import { createSelector } from "@ngrx/store";

import * as fromRoot from "../../../app/store";
import * as fromFeatures from "../reducers";
import * as fromPizzas from "../reducers/pizzas.reducer";

import { Pizza } from "../../models/pizza.model";

export const getPizzaState = createSelector(
  fromFeatures.getProductState,
  (state: fromFeatures.ProductState) => state.pizzas
);

export const getPizzasEntities = createSelector(
  getPizzaState,
  (state: fromPizzas.PizzaState) => state.entities
);

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  fromRoot.getRouterState,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params.pizzaId];
  }
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
