'use strict';


class AccountType {
    constructor(isPremium = false) {
        this._isPremium = isPremium;
    }

    get isPremium() {
        return this._isPremium;
    }
}

class Account {
    constructor() {
        this._daysOverdrawn = 0;
        this._type = new AccountType();
    }

    get bankCharge() {
        let result = 4.5;
        if (this._daysOverdrawn > 0) result += this.overdraftCharge;
        return result;
    }
    
    get overdraftCharge() {
        if (this.type.isPremium) {
            const baseCharge = 10;
            if (this.daysOverdrawn <= 7) {
                return baseCharge;
            } else {
                return baseCharge + (this.daysOverdrawn - 7) * 0.85;
            }
        } else {
            return this.daysOverdrawn * 1.75;
        }
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