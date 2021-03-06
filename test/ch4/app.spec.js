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

    it('negative demand', function() {  // 수요가 마이너스
        asia.demand= -1;
        expect(asia.shortfall).equal(-26);
        expect(asia.profit).equal(-10);
    });

    it('empty string demand', function() {  // 수요가 비었을 경우
        asia.demand= '';
        expect(asia.shortfall).NaN;
        expect(asia.profit).NaN;
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

describe('string for producers', function() {
    it('', function() {
        const data = {
            name: 'String producers',
            producers: '',
            demand: 30,
            price: 20,
        };

        const prov = new Province(data);
        expect(prov.shortfall).equal(0);
    });
})

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