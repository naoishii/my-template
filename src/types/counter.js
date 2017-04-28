import type { Action } from './action';

export interface CounterState {
  count: number;
}

export interface CounterAction extends Action {}
// export type CounterAction = IncrementAction & ResetAction
