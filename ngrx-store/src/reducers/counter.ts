import { Action } from '@ngrx/store';

export const ADD_ONE = 'ADD_ONE';
export const ADD_FIVE = 'ADD_FIVE';
export const SUBTRACT_ONE = 'SUBTRACT_ONE';
export const SUBTRACT_FIVE = 'SUBTRACT_FIVE';
export const RESET = 'REST';

const initialState = {
  count: 0
}

export interface counterReducerInterface {
  count: number;
}

export function counterReducer(state = initialState, action: Action) {
  console.log('Hit:', state, action);
  switch (action.type) {
    case ADD_ONE:
      return Object.assign( state, { count: state.count + 1} );

    case ADD_FIVE:
      return Object.assign( state, { count: state.count + 5 } );

    case SUBTRACT_ONE:
      return Object.assign( state, { count: state.count - 1 } );

    case SUBTRACT_FIVE:
      return Object.assign( state, { count: state.count - 5 } );

    case RESET:
      return Object.assign( initialState );

    default:
      return state;
  }
}