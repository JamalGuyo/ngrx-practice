import { Pizza } from "@models/pizza.model";
import * as fromPizzas from "../actions/pizzas.action";

// state
export interface PizzaState {
  entities: { [id: number]: Pizza };
  loading: boolean;
  loaded: boolean;
}

// initial state
const initialState: PizzaState = {
  entities: {},
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
      const pizzas = action.payload;
      const entities = pizzas.reduce(
        (entities: { [id: number]: Pizza }, pizza: Pizza) => {
          return { ...entities, [pizza.id]: pizza };
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

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromPizzas.UPDATE_PIZZA_SUCCESS:
    case fromPizzas.CREATE_PIZZA_SUCCESS: {
      const { payload: pizza } = action;
      const entities = {
        ...state.entities,
        [pizza.id]: pizza,
      };
      return {
        ...state,
        entities,
      };
    }
  }

  return state;
}
