import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import * as pizzaActions from "../actions/pizzas.action";
import * as fromServices from "../../services";

import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { Pizza } from "@models/pizza.model";

@Injectable()
export class PizzasEffect {
  constructor(
    private actions$: Actions,
    private pizzaService: fromServices.PizzasService
  ) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzaService.getPizzas().pipe(
        map((pizzas) => new pizzaActions.LoadPizzasSuccess(pizzas)),
        catchError((error) => of(new pizzaActions.LoadPizzasFail(error)))
      );
    })
  );

  @Effect()
  createPizza$ = this.actions$.ofType(pizzaActions.CREATE_PIZZA).pipe(
    map((action: pizzaActions.CreatePizza) => action.payload),
    switchMap((pizza: Pizza) =>
      this.pizzaService.createPizza(pizza).pipe(
        map((pizza: Pizza) => new pizzaActions.CreatePizzaSuccess(pizza)),
        catchError((error) => of(new pizzaActions.CreatePizzaFail(error)))
      )
    )
  );
}
