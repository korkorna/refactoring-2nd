'use strict';

module.exports = class Clock {
    static _today;

    constructor(year, month, date) {
        this._year = year;
        this._month = month;
        this._date = date;
    }

    static get today() {
        if (!this._today) {
            const now = new Date();
            Clock._today = new Clock(now.getFullYear(), now.getMonth(), now.getDate());
        }
        return Clock._today;
    }

    static set today(date) {
        Clock._today = new Clock(date.getFullYear(), date.getMonth(), date.getDate());
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