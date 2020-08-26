const expect = require('chai').expect;

const readingOutsideRange = require('../../src/ch6/item8');
const NumberRange = require('../../src/ch6/numberRange');

const station = {
   name: "ZB1",
   readings: [
      {temp: 47, time: "2016-11-10 09:10"},
      {temp: 53, time: "2016-11-10 09:20"},
      {temp: 58, time: "2016-11-10 09:30"},
      {temp: 53, time: "2016-11-10 09:40"},
      {temp: 51, time: "2016-11-10 09:50"},
   ]
};

const operatingPlan = {
   temperatureFloor: 50,
   temperatureCeiling: 56
};

describe('Introduce Parameter Object', function () {
   it('readingOutsideRange', function () {
      const range = new NumberRange(operatingPlan.temperatureFloor, 
                                    operatingPlan.temperatureCeiling);

      const expected = [
         {temp: 47, time: "2016-11-10 09:10"},
         {temp: 58, time: "2016-11-10 09:30"}
      ];
      expect(readingOutsideRange(station, range)).to.eql(expected);
   });
});