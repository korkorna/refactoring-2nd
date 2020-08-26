const expect = require('chai').expect;

let getDefaultOwner = require('../../src/ch6/item6').getDefaultOwner;
const setDefaultOwner = require('../../src/ch6/item6').setDefaultOwner;

describe('defaultOwner', function () {
   it('success', function () {
      let spaceship = {};
      spaceship.owner = getDefaultOwner();
      expect(spaceship.owner.firstName).equal('마틴');
      expect(spaceship.owner.lastName).equal('파울러');
   });
});