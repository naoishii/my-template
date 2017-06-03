import type { Action } from './action';

export interface CounterState {
  count: number;
  lastUpdate: Date;
}

export interface CounterAction extends Action {}
// export type CounterAction = IncrementAction & ResetAction
