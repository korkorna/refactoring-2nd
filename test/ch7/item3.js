const assert = require('chai').assert;
const expect = require('chai').expect;

const { Order, Prioirty } = require('../../src/ch7/item3');

function highPriorityCount(aList) {
    return aList
        .filter(o => "high" === o.priority || "rush" === o.priority)
        .length;
}

describe('replace primitive with object ', function () {
    let orders;

    beforeEach(function () {
        orders = [{priority:'high'}, {priority:'low'}, {priority:'rush'}, {priority:'low'}]
            .map(o => new Order(o));
    });

    it('우선순위 높은 주문 갯수 확인', function () {
        expect(highPriorityCount(orders)).equal(2);
    });

    it('prioiry 확인', function () {
        const prioirty = new Prioirty('high');
        expect(prioirty.toString()).equal('high');
    })
});