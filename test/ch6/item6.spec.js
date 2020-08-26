const expect = require('chai').expect;

let defaultOwner = require('../../src/ch6/item6');

describe('defaultOwner', function () {
   it('success', function () {
      const expected = { firstName: '레베카', lastName: '파슨스' }
      defaultOwner =  expected;
      expect(expected).to.eql(defaultOwner);
   });
});