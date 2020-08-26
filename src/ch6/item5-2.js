'use strict';

module.exports = class Book {
    constructor() {
        this._reservations = [];
    }

    addReservation(customer) {
        this.zz_addReservation(customer);
    }

    zz_addReservation(customer) {
        this._reservations.push(customer);
    }

    get reservations() {
        return Object.assign([], this._reservations);
    }
}