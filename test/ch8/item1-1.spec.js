const assert = require('chai').assert;
const expect = require('chai').expect;

const { trackSummary, totalDistance, distance, radians } = require('../../src/ch8/item1-1');

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

    it ('top_calculateDistance', function () {
        const points = [
            {lat: 37.498095, lon: 127.027610},
            {lat: 37.3977555, lon: 127.1103127},
        ];
        const expected = 8.28566498158589;
        expect(totalDistance(points)).equal(expected);
    });

    it ('distance', function () {
        const points = [
            {lat: 37.498095, lon: 127.027610},
            {lat: 37.3977555, lon: 127.1103127},
        ];
        const expected = 8.28566498158589;
        expect(distance(points[1], points[0])).equal(expected);
    });

    it ('radians', function () {
        const point = {lat: 37.498095, lon: 127.027610};
        const expected = 0.6544652209756231;
        expect(radians(point['lat'])).equal(expected);
    });
});