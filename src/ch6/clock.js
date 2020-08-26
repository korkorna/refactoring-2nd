'use strict';

module.exports = class Clock {
    constructor(year, month, date) {
        this._year = year;
        this._month = month;
        this._date = date;
    }

    static get today() {
        const now = new Date();
        return new Clock(now.getFullYear(), now.getMonth(), now.getDate());
    }

    getFullYear() {
        return this._year;
    }

    getMonth() {
        return this._month;
    }

    getDate() {
        return this._date;
    }
};