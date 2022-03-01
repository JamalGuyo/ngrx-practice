import * as fromToppings from "../actions/toppings.action";
import { Topping } from "@models/topping.model";

// state
export interface ToppingsState {
  entities: { [id: number]: Topping };
  loaded: boolean;
  loading: boolean;
}

// initialstate
export const initialstate: ToppingsState = {
  entities: [],
  loaded: false,
  loading: false,
};

// reducer
export const reducer = (
  state = initialstate,
  action: fromToppings.ToppingsAction
): ToppingsState => {
  switch (action.type) {
    case fromToppings.LOAD_TOPPINGS: {
      return { ...state, loaded: false, loading: true };
    }

    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;
      const entities = toppings.reduce(
        (entities: { [id: number]: Topping }, topping: Topping) => {
          return { ...entities, [topping.id]: topping };
        },
        { ...state.entities }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return { ...state, loaded: false, loading: false };
    }
  }
  return state;
};

export const getToppingsEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
