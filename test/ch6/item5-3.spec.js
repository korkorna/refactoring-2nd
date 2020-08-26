const expect = require('chai').expect;

const isNewEngland = require('../../src/ch6/item5-3');

// ??? 불변변수로 선언할경우 filter 사용시 에러가 발생함 .. Assignment to constant variable.
let someCustomers = [
   { address: {state: 'MA'} },
   { address: {state: 'CT'} },
   { address: {state: 'ME'} },
   { address: {state: 'AA'} },
   { address: {state: 'BB'} }
];

describe('isNewEngland', function () {
   it('success', function () {
      const expected = someCustomers = [
         { address: {state: 'MA'} },
         { address: {state: 'CT'} },
         { address: {state: 'ME'} }
      ];
      expect(expected).to.eql(someCustomers.filter(c => isNewEngland(c.address.state)));
   });
});