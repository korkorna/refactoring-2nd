const assert = require('chai').assert;
const expect = require('chai').expect;

const {Province, Producer} = require('../../src/ch4/app');

describe('province', function () {
    const asia = new Province(sampleProvinceData()); //픽스쳐 설정   // bad usecase  // 테스트끼리 상호작용하는 공유 픽스쳐로... 잘못된 결과를 내보냄..
    it ('shortfail', function() {
        assert.equal(asia.shortfall, 5); // 검증
    }) ;

    it('profit', function() {
        assert.equal(asia.profit, 230);
    })
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