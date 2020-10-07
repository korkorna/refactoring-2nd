'use strict';

function getYoungestAndTotalSalary(people) {
    return `youngestAge: ${youngestAge()}, totalSalary: ${calcTotalSalary()}`;

    function calcTotalSalary() {
        let totalSalary = 0;
        for (const p of people) {
            totalSalary += p.salary;
        }
        return totalSalary;
    }

    function youngestAge() {
        let youngest = people[0] ? people[0].age : Infinity;
        for (const p of people) {
            if (p.age < youngest) youngest = p.age;
        }
        return youngest;
    }
}

module.exports = getYoungestAndTotalSalary;