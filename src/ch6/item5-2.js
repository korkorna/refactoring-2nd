'use strict';
const assert = require('assert');

module.exports = class Book {
    constructor() {
        this._reservations = [];
    }

    /**
     * @deprecated addReservation 호출문을 모두 zz_addReservation 호출하도록 수정하라
     * @param customer
     */
    addReservation(customer) {
        this.zz_addReservation(customer, false);
    }

    zz_addReservation(customer, isPriority) {
        assert(isPriority == true || isPriority == false);
        this._reservations.push(customer);
    }

    get reservations() {
        return Object.assign([], this._reservations);
    }
}