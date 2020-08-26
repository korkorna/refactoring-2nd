'use strict';

module.exports = function price(order) {
    // 가격(price) = 기본 가격 - 수량 할인 + 배송비
    const basePrice = order.quantity * order.itemPrice;
    return order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100);
}