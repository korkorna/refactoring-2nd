'use strict';

class Order {
    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }

    get price() {
        const basePrice = this._quantity * this._item.price;
        var discountFactor = 0.98;

        if (basePrice > 1000) {
            discountFactor -= 0.03;
        }
        return basePrice * discountFactor;
    }
}

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

module.exports = {
  Order, Item
};