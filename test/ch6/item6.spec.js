const expect = require('chai').expect;

let getDefaultOwner = require('../../src/ch6/item6').getDefaultOwner;
const setDefaultOwner = require('../../src/ch6/item6').setDefaultOwner;

describe('defaultOwner', function () {
   let spaceship;
   beforeEach(function() {
      spaceship = {};
   });
   it('success', function () {
      spaceship.owner = getDefaultOwner();
      expect(spaceship.owner.firstName).equal('마틴');
      expect(spaceship.owner.lastName).equal('파울러');
   });

   it('change defaultOwner', function () {
      setDefaultOwner({ firstName: '레베카', lastName: '파슨스' })
      spaceship.owner = getDefaultOwner();
      expect(spaceship.owner.firstName).equal('레베카');
      expect(spaceship.owner.lastName).equal('파슨스');
   });
});