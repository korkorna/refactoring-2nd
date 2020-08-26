const expect = require('chai').expect;

const Book = require('../../src/ch6/item5-2');

describe('book', function () {
   it('success', function () {
      const book = new Book();
      book.addReservation('Mr. hong');
      expect(['Mr. hong']).to.eql(book.reservations);
   });
});