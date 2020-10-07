const assert = require('chai').assert;
const expect = require('chai').expect;

const { renderPerson, photoDiv } = require('../../src/ch8/item3');

describe('MoveStatementIntoFunction', function () {

    it ('renderPerson', function () {
        const person = {
            name: '마틴',
            photo: {
                title: '코딩연습',
                location: '서울',
                date: new Date(2020,10,7)
            }
        };
        expect(renderPerson([], person)).equal("<p>마틴</p>\n\n<p>제목 : 코딩연습</p>\n<p>위치 : 서울</p>\n<p>날짜 : Sat Nov 07 2020</p>");
    });

    it ('photoDiv', function () {
        const person = {
            name: '마틴',
            photo: {
                title: '코딩연습',
                location: '서울',
                date: new Date(2020,10,7)
            }
        };
        expect(photoDiv(person.photo)).equal("<div>\n<p>제목 : 코딩연습</p>\n<p>위치 : 서울</p>\n<p>날짜 : Sat Nov 07 2020</p>\n</div>");
    });
});