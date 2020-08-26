'use strict';

module.exports = class Book {
    constructor() {
        this._reservations = [];
    }

    addReservation(customer) {
        this.zz_addReservation(customer, false);
    }

    zz_addReservation(customer, isPriority) {
        this._reservations.push(customer);
    }

    get reservations() {
        return Object.assign([], this._reservations);
    }
}