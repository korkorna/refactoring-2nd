'use strict';


class AccountType {
    constructor(isPremium = false) {
        this._isPremium = isPremium;
    }

    get isPremium() {
        return this._isPremium;
    }

    overdraftCharge(daysOverdrawn) {
        if (this.isPremium) {
            const baseCharge = 10;
            if (daysOverdrawn <= 7) {
                return baseCharge;
            } else {
                return baseCharge + (daysOverdrawn - 7) * 0.85;
            }
        } else {
            return daysOverdrawn * 1.75;
        }
    }
}

class Account {
    constructor() {
        this._daysOverdrawn = 0;
        this._type = new AccountType();
    }

    get bankCharge() {
        let result = 4.5;
        if (this._daysOverdrawn > 0) result += this.type.overdraftCharge(this.daysOverdrawn);
        return result;
    }

    get daysOverdrawn() {
        return this._daysOverdrawn;
    }

    set daysOverdrawn(aNumber) {
        this._daysOverdrawn = aNumber;
    }

    get type() {
        return this._type;
    }
}

module.exports = {
    Account, AccountType
}