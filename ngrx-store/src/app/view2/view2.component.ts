import { Component } from '@angular/core';
// Store
import { Store } from '@ngrx/store';

@Component({
  selector: 'view-2',
  templateUrl: './view2.template.html'
})

export class View2 {
  private count: number;

  constructor( private store: Store<any> ) {
    store.subscribe( state => {
      const counterState = state.counter;

      this.count = counterState.count;
    })
  }
}