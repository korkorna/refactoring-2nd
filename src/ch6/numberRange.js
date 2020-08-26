'use strict';

module.expects = class NumberRange {
  constructor(min, max) {
    this._data = {
      min: min,
      max: max
    };
  }

  get min() {
    return this._data.min;
  }

  get max() {
    return this._data.max;
  }
}