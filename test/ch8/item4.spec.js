const assert = require('chai').assert;
const expect = require('chai').expect;

const { renderPerson, listRecentPhotos } = require('../../src/ch8/item4');

class ArrayOutputStream {

    constructor() {
        this._data = []
    }

    write(aString) {
        this._data.push(aString);
    }

    toString() {
        return this._data.join('\n');
    }
}

describe('MoveStatementsToCallers', function () {
    let outputStream;

    beforeEach(function() {
        outputStream = new ArrayOutputStream(); //픽스쳐 설정
    });

    it ('renderPerson', function () {
        const person = {
            name: '마틴',
            photo: {
                title: '코딩연습',
                location: '서울',
                date: new Date(2020,10,7)
            }
        };
        renderPerson(outputStream, person);
        expect(outputStream.toString()).equal("<p>마틴</p>\n<p>title: 코딩연습</p>\n\n<p>date: Sat Nov 07 2020</p>\n\n<p>location: 서울</p>\n");
    });

    it ('listRecentPhotos', function () {
        const photos = [
            {
                title: '코딩연습',
                location: '서울',
                date: new Date(2020,10,7)
            },
            {
                title: '코딩연습',
                location: '서울',
                date: new Date(2020,10,7)
            },
        ];
        listRecentPhotos(outputStream, photos);
        expect(outputStream.toString()).equal("<div>\n\n<p>title: 코딩연습</p>\n\n<p>date: Sat Nov 07 2020</p>\n\n<p>location: 서울</p>\n\n</div>\n\n<div>\n\n<p>title: 코딩연습</p>\n\n<p>date: Sat Nov 07 2020</p>\n\n<p>location: 서울</p>\n\n</div>\n");
    });
});