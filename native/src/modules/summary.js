// @flow
import type { SummaryState, SummaryAction } from '../types/summary';
import type { CountState } from '../types/counter';
import { asyncGetCount } from '../storage/storage';

const RECEIVE_DATA = 'Summary/ReceiveData';
const FETCH_ERROR = 'Summary/FetchError';

const initialState = {
  history: [],
};

export default function reducer(
  state: SummaryState = initialState,
  action: SummaryAction = {},
): Object {
  switch (action.type) {
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        history: action.payload,
      });

    default:
      return state;
  }
}

export function receiveData(payload: Array<CountState>): Object {
  return {
    type: RECEIVE_DATA,
    payload,
  };
}

export function fetchData(): Function {
  return (dispatch) => {
    asyncGetCount().then((payload: Object) => {
      const countArray: Array<CountState> = Object.keys(payload).map(key => payload[key]);
      dispatch(receiveData(countArray));
    }).catch((e: Error) => {
      dispatch({
        type: FETCH_ERROR,
        message: e,
      });
    });
  };
}
