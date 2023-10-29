import { action, computed, makeObservable, observable } from "mobx";

export default class counterStore {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      isNegative: computed,
      increase: action,
      decrease: action,
    });
  }

  // count 값이 0보다 작으면 no로 표시함
  get isNegative() {
    return this.count < 0 ? "yes" : "no";
  }

  increase() {
    this.count += 1;
  }

  decrease() {
    this.count -= 1;
  }
}
