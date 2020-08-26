'use strict';

module.exports = function price(order) {
    const basePrice = order.quantity * order.itemPrice;
    const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(basePrice * 0.1, 100);
    return basePrice - quantityDiscount + shipping;
}


/**
 * 변수 추출하기를 클래스에서 처리할 경우
 * - 절차는 동일하게 처리한다.
 */

// ************ before ************

// class Order {
//     constructor(aRecord) {
//         this._data = aRecord;
//     }
//
//     get quantity() {
//         return this._data.quantity;
//     }
//
//     get itemPrice() {
//         return this._data.itemPrice;
//     }
//
//     get price() {
//         return order.quantity * order.itemPrice -
//             Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
//             Math.min(order.quantity * order.itemPrice * 0.1, 100);
//     }
// }

// ************ after ************

// class Order {
//     constructor(aRecord) {
//         this._data = aRecord;
//     }
//
//     get quantity() {
//         return this._data.quantity;
//     }
//
//     get itemPrice() {
//         return this._data.itemPrice;
//     }
//
//     get price() {
//         return this.basePrice - this.quantityDiscount + this.shipping;
//     }
//
//     get shipping() {
//         return Math.min(this.basePrice * 0.1, 100);
//     }
//
//     get quantityDiscount() {
//         return Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
//     }
//
//     get basePrice() {
//         return order.quantity * order.itemPrice;
//     }
// }