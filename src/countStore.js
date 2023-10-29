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
}
