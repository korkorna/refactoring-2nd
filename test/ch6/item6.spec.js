const expect = require('chai').expect;

let defaultOwner = require('../../src/ch6/item6').defaultOwner;
const setDefaultOwner = require('../../src/ch6/item6').setDefaultOwner;

describe('defaultOwner', function () {
   let spaceship;
   beforeEach(function() {
      spaceship = {};
      setDefaultOwner({ firstName: '마틴', lastName: '파울러' });
   });
   it('success', function () {
      spaceship.owner = defaultOwner();
      expect(spaceship.owner.firstName).equal('마틴');
      expect(spaceship.owner.lastName).equal('파울러');
   });

   it('change defaultOwner', function () {
      setDefaultOwner({ firstName: '레베카', lastName: '파슨스' })
      spaceship.owner = defaultOwner();
      expect(spaceship.owner.firstName).equal('레베카');
      expect(spaceship.owner.lastName).equal('파슨스');
   });

   it('cannot modify defaultOwner', function () {
      spaceship.owner = defaultOwner();
      setDefaultOwner({ firstName: '레베카', lastName: '파슨스' })
      expect(spaceship.owner.firstName).not.equal('레베카');
      expect(spaceship.owner.lastName).not.equal('파슨스');
   });
});