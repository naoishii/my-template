import LS from './LS';
import fireDB from './fireDB';

const messagesRef = fireDB.ref('messages');

export function syncSetCount(count: Object): void {
  LS.save('count', count);
}

export function asyncSetCount(count: Object): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      syncSetCount(count);
      messagesRef.push(count);
      resolve();
    }, 1000);
  });
}

export function syncGetCount(): Object {
  return LS.load('count');
}

export function asyncGetCount(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const count = syncGetCount();
      resolve(count);
    }, 1000);
  });
}
