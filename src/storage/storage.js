import LS from './LS';

export function syncSetCount(count: number): void {
  LS.save('count', count);
}

export function asyncSetCount(count: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      syncSetCount(count);
      resolve();
    }, 1000);
  });
}

export function syncGetCount(): number {
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
