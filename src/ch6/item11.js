'use strict';

module.exports = function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const priceData = {};
    const price = applyShipping(priceData, basePrice, shippingMethod, quantity, discount);
    return price;
};

function applyShipping(priceData, basePrice, shippingMethod, quantity, discount) {
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold) ?
        shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
}