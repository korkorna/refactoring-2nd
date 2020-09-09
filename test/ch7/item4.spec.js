const assert = require('chai').assert;
const expect = require('chai').expect;

const { Order, Item } = require('../../src/ch7/item4');

describe('Replace Temp with Query', function () {

    it ('1000원 이하 주문 가격', function () {
        const order = new Order(2, new Item('일회용우의', 400))
        expect(order.price).equal(784);
    });

    it ('1000원 이상 주문에 대한 추가 할인 주문 가격 적용', function () {
        const order = new Order(10, new Item('일회용우의', 400))
        expect(order.price).equal(3800);
    });
});