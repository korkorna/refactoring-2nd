'use strict';

function getYoungestAndTotalSalary(people) {
    return `youngestAge: ${youngestAge()}, totalSalary: ${calcTotalSalary()}`;

    function calcTotalSalary() {
        return people.reduce((total, p) => total + p.salary, 0);
    }

    function youngestAge() {
        return Math.min(...people.map(p => p.age));  // 좌항에서 명시적으로 할당되지 않은 나머지 배열 값들을 사용
    }
}

module.exports = getYoungestAndTotalSalary;