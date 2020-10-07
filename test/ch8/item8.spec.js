const assert = require('chai').assert;
const expect = require('chai').expect;

const acquireData = require('../../src/ch8/item8');
// const rawdata = require('../../src/ch8/item8-data.csv');  // SyntaxError: Unexpected number

const rawdata = `office, country, telephone
Chicago, USA, +1 312 373 1000
Beijing, China, +86 4008 900 505
Bangalore, India, +91 80 4064 9570
Porto Alegre, Brazil, +55 51 3079 3550
Chennai, India, +91 44 660 44766`;

describe('ReplaceLoopWithPipeline', function () {

    it ('acquireData', function () {
        const expected = [{ city: 'Bangalore', phone: '+91 80 4064 9570' }, { city: 'Chennai', phone: '+91 44 660 44766' }];
        expect(acquireData(rawdata)).to.deep.equal(expected);
    });
});