'use strict';

module.exports = class Clock {
    constructor(year, month, day) {
        this._year = year;
        this._month = month;
        this._day = day;
    }

    static get today() {
        const now = new Date();
        return new Clock(now.getFullYear(), now.getMonth(), now.getDay());
    }

    getFullYear() {
        return this._year;
    }

    getMonth() {
        return this._month;
    }

    getDate() {
        return `${this._month}/${this._day}/${this._year}`;
    }
};