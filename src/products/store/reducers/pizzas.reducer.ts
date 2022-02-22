import { Pizza } from "@models/pizza.model";
import * as fromPizzas from "../actions/pizzas.action";

// state
export interface PizzaState {
  data: Pizza[];
  loading: boolean;
  loaded: boolean;
}

// initial state
const initialState: PizzaState = {
  data: [],
  loaded: false,
  loading: false,
};

// reducer
export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}
