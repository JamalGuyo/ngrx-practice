import { createSelector } from "@ngrx/store";

import * as fromRoot from "@app/store";
import * as fromFeature from "../reducers";
import * as fromToppings from "../reducers/toppings.reducer";

import { Topping } from "@models/topping.model";

export const getToppingsState = createSelector(
  fromFeature.getProductState,
  (state: fromFeature.ProductState) => state.toppings
);

export const getToppingEntities = createSelector(
  getToppingsState,
  fromToppings.getToppingsEntities
);

export const getselectedToppings = createSelector(
  getToppingsState,
  fromToppings.getselectedToppings
);

export const getAllToppings = createSelector(getToppingEntities, (entities) =>
  Object.keys(entities).map((id) => entities[parseInt(id, 10)])
);

export const getToppingsLoaded = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoaded
);

export const getToppingsLoading = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoading
);
