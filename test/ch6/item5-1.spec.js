const expect = require('chai').expect;

const circum = require('../../src/ch6/item5-1');

describe('circum', function () {
   it('success', function () {
      expect(62.83185307179586).equal(circum(10));
   });
});