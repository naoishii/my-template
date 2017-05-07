import LS from './LS';
import fireDB from './fireDB';

const counterRef = fireDB.ref('counter');

// sample
export function syncSetCount(count: Object): void {
  LS.save('count', count);
}

export function asyncSetCount(count: Object): Promise<void> {
  return new Promise((resolve: Function) => {
    counterRef.push(count, resolve);
  });
}

// sample
export function syncGetCount(): Object {
  return LS.load('count');
}

export function asyncGetCount(): Promise<void> {
  return new Promise((resolve) => {
    counterRef.once('value').then((snapshot: Object) => {
      resolve(snapshot.val());
    });
  });
}
