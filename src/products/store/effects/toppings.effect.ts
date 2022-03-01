import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { ToppingsService } from "@services/toppings.service";

import * as toppingsActions from "../actions/toppings.action";

import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "core-js/core/array";

@Injectable()
export class ToppingsEffect {
  constructor(
    private Actions$: Actions,
    private toppingsService: ToppingsService
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
