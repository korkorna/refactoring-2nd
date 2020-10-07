/**
 * example
 */

// 1 const pricingPlan = retrievePricingPlan();
// 2 const order = retreiveOrder();
// 3 const baseCharge = pricingPlan.base;
// 4 let charge;
// 5 const chargePerUnit = pricingPlan.unit;
// 6 const units = order.units;
// 7 let discount;
// 8 charge = baseCharge + units * chargePerUnit;
// 9 let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
// 10 discount = discountableUnits * pricingPlan.discountFactor;
// 11 if (order.isRepeat) discount += 20;
// 12 charge = charge - discount;
// 13 chargeOrder(charge);

/**
 * 조건문이 있을때의 슬라이드
 */

// let result;
// if (availableResources.length === 0) {
//     result = createResource();
//     allocatedResources.push(result);
// } else {
//     result = availableResources.pop();
//     allocatedResources.push(result);
// }
// return result;


// let result;
// if (availableResources.length === 0) {
//     result = createResource();
// } else {
//     result = availableResources.pop();
// }
// allocatedResources.push(result);
// return result;