// @flow
import type { CounterState, CounterAction } from '../types/counter';

const INCREMENT = 'Counter/INCREMENT';
const DECREMENT = 'Counter/DECREMENT';
const RESET = 'Counter/RESET';

const initialState = {
  count: 0,
  lastUpdate: 0,
};

export default function reducer(state: CounterState = initialState, action: CounterAction = {}) {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1,
        lastUpdate: Date.now(),
      });

    case DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1,
        lastUpdate: Date.now(),
      });

    case RESET:
      return initialState;

    default:
      return state;
  }
}

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
