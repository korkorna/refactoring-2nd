const assert = require('chai').assert;
const expect = require('chai').expect;

const getOrganization = require('../../src/ch7/item1');

describe('EncapsulateRecord', function () {

    it ('organzation name 읽기', function () {
       expect(getOrganization().name).equal('애크미 구스베리');
    });

    it ('organzation name 수정', function () {
        getOrganization().name = '니콜라';
        expect(getOrganization().name).equal('니콜라');
    });

    it ('organzation county 읽기', function () {
        expect(getOrganization().country).equal('GB');
    });

    it ('organzation county 수정', function () {
        getOrganization().country = 'EN';
        expect(getOrganization().country).equal('EN');
    });
});