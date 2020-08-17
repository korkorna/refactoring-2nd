const assert = require('chai').assert;
const expect = require('chai').expect;

const {Province, Producer} = require('../../src/ch4/app');

describe('province', function () {
    let asia;
    beforeEach(function() {
        asia = new Province(sampleProvinceData()); //픽스쳐 설정
    });

    it ('shortfail', function() {
        assert.equal(asia.shortfall, 5); // 검증
    });

    it('profit', function() {
        assert.equal(asia.profit, 230);
    });

    it('change production', function() {
       asia.producers[0].production = 20;
       expect(asia.shortfall).equal(-6);
       expect(asia.profit).equal(292);
    });

    it('zero demand', function() {  // 수요가 없음
        asia.demand= 0;
        expect(asia.shortfall).equal(-25);
        expect(asia.profit).equal(0);
    });
});

describe('no producers', function() {
    let noProducers;
    beforeEach(function() {
       const data = {
           name: 'No Producers',
           producers: [],
           demand: 30,
           price: 20
       };
       noProducers = new Province(data);
    });

    it ('shortfail', function() {
        const data = {
            name: 'No Producers',
            producers: [],
            demand: 30,
            price: 20
        };
        noProducers = new Province(data);
        assert.equal(noProducers.shortfall, 30);
    });

    it('profit', function() {
        assert.equal(noProducers.profit, 0);
    });
});

function sampleProvinceData() {
    return {
        name: "Asia",
        producers: [
            { name: "Byzantium", cost: 10, production: 9 },
            { name: "Attalia", cost: 12, production: 10 },
            { name: "Sinope", cost: 10, production: 6 },
        ],
        demand: 30,
        price: 20
    };
}