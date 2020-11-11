const assert = require('chai').assert;
const expect = require('chai').expect;

const score = require('../../src/ch11/item9');

describe('Replace Function with Command', function () {

    it ('score', function () {
        let candidate = {
            originState: true
        };
        let medicalExam = {
            isSmoker: true
        };
        let scoringGuide = {
            stateWithLowCertification: function (state) {
                return true
            }
        };
        const result = {};
        expect(score(candidate, medicalExam, scoringGuide)).equal(-10);
    });

    it ('score2', function () {
        let candidate = {
            originState: true
        };
        let medicalExam = {
            isSmoker: false
        };
        let scoringGuide = {
            stateWithLowCertification: function (state) {
                return true
            }
        };
        const result = {};
        expect(score(candidate, medicalExam, scoringGuide)).equal(-5);
    });

});