import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Store
import { StoreModule } from '@ngrx/store';
// Reducer(s)
import { counterReducer } from '../reducers/counter';
// Components
import { AppComponent } from './app.component';
import { View2 } from './view2/view2.component';

@NgModule({
  declarations: [
    AppComponent,
    View2
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
