import * as storage from '../storage/storage';

const INCREMENT = 'Counter/INCREMENT';

const asyncStorage = (store: Object) => (next: Function) => (action: Object) => {
  const result = next(action);
  const state = store.getState();
  if (action.type === INCREMENT) {
    storage.asyncSetCount(state.counter);
  }
  return result;
};

export default asyncStorage;
