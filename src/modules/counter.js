const INCREMENT = 'Counter/INCREMENT';
const DECREMENT = 'Counter/DECREMENT';
const RESET = 'Counter/RESET';

const initialState = {
  count: 0,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1,
      });

    case DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1,
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

export function dencrement() {
  return {
    type: INCREMENT,
  };
}

export function reset() {
  return {
    type: INCREMENT,
  };
}
