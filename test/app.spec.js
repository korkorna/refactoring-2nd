const assert = require('assert');
const sayHello = require('../src/app').sayHello;

describe('App Test', function () {
   it('sayHello', function () {
       assert.equal(sayHello(), 'hello');
   });
});