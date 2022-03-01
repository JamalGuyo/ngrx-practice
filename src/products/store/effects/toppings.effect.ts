import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import * as fromServices from "../../services";

import * as toppingsActions from "../actions/toppings.action";

import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs/observable/of";

@Injectable()
export class ToppingsEffect {
  constructor(
    private Actions$: Actions,
    private toppingsService: fromServices.ToppingsService
  ) {}

  @Effect()
  loadToppings$ = this.Actions$.ofType(toppingsActions.LOAD_TOPPINGS).pipe(
    switchMap(() =>
      this.toppingsService.getToppings().pipe(
        map(
          (topping) => new toppingsActions.LoadToppingsSuccess(topping),
          catchError((error) => of(new toppingsActions.LoadToppingsFail(error)))
        )
      )
    )
  );
}
