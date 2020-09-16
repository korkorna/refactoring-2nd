const assert = require('chai').assert;
const expect = require('chai').expect;

const trackSummary = require('../../src/ch8/item1-1');

describe('MoveFunction', function () {

    it ('trackSummary', function () {
        const points = [
            {lat: 37.498095, lon: 127.027610},
            {lat: 37.3977555, lon: 127.1103127},
        ];
        const expected = {
            time: 72000,
            distance: 8.28566498158589,
            pace: 144.82844800832365
        };
        expect(trackSummary(points)).to.deep.equal(expected);
    });
});