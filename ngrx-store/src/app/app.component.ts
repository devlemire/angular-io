import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

// Store
import { Store } from '@ngrx/store';

// Action Types
import { ADD_ONE, ADD_FIVE, SUBTRACT_ONE, SUBTRACT_FIVE, RESET } from '../reducers/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private count: Observable<Number>;

  constructor( private store: Store<any> ) {
    store.subscribe( state => {
      const counterState = state.counter;

      this.count = counterState.count;
    });
  }

  addOne() {
    this.store.dispatch({ type: ADD_ONE });
  }

  addFive() {
    this.store.dispatch({ type: ADD_FIVE });
  }

  subtractOne() {
    this.store.dispatch({ type: SUBTRACT_ONE });
  }

  subtractFive() {
    this.store.dispatch({ type: SUBTRACT_ONE });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }
}
