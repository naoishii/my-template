class Storage {
  constructor() {
    this.data = {};
  }

  setItem(key: string, val: any): void {
    this.data[key] = val;
  }

  getItem(key: string): any {
    return this.data[key];
  }

  clear(): void {
    this.data = {};
  }

}

class LS {
  constructor() {
    try {
      window.localStorage.setItem('LStest', 1);
      this.storage = window.localStorage;
    } catch (e) {
      this.storage = new Storage();
    }
  }

  save(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  load(key: string): any {
    return JSON.parse(this.storage.getItem(key));
  }
}

const ls = new LS();
export default ls;
