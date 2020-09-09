'use strict';

class Order {
    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }

    get price() {
        return this.basePrice * this.discountFactor;
    }

    get basePrice() {return this._quantity * this._item.price;}
    get discountFactor() {
        let discountFactor = 0.98;
        if (this.basePrice > 1000) {
            discountFactor -= 0.03;
        }
        return discountFactor;
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