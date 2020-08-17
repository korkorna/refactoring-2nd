const assert = require('chai').assert;
const expect = require('chai').expect;

const {Province, Producer} = require('../../src/ch4/app');

describe('province', function () {
    it ('shortfail', function() {
        const asia = new Province(sampleProvinceData()); //픽스쳐 설정
        assert.equal(asia.shortfall, 5); // 검증
    }) ;
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