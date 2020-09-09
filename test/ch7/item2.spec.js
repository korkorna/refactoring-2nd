const assert = require('chai').assert;
const expect = require('chai').expect;

const { Person, Course } = require('../../src/ch7/item2');

function numberAdvancedCources(aPerson) {
    return aPerson.courses
        .filter(course => course.isAdvanced)
        .length;
}

describe('2.Encapsulate Collection', function () {
    let courses, person;

    beforeEach(function () {
        courses = [
            new Course("국어", true),
            new Course("영어", true),
            new Course("수학", true),
            new Course("미술", false),
            new Course("체육", false)
        ];

        person = new Person("마틴 파울러");
        person.courses = courses;
    })

    it ('수강 수업 확인', function () {
        expect(numberAdvancedCources(person)).equal(3);
    });

    it ('수업 추가 성공', function () {
        person.addCourse(new Course("과학", true))
        expect(numberAdvancedCources(person)).equal(4);
    });

    // it ('수업 추가 - 다른 타입의 클래스 추가', function () {
    //     const otherCourse = ['부동산', '주식'];
    //     person.courses = otherCourse.map(name => new Course(name, false));
    //     expect(numberAdvancedCources(person)).equal(4);
    // });

    // it ('수업 추가 - 다른 타입의 클래스 추가', function () {
    //     person.courses.push(new Person("과학"));
    //     expect(numberAdvancedCources(person)).equal(4);
    // });
})