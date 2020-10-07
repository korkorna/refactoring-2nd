'use strict';

function getYoungestAndTotalSalary(people) {
    let totalSalary = calcTotalSalary();
    let youngest = getYoungest();
    return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;

    function calcTotalSalary() {
        let totalSalary = 0;
        for (const p of people) {
            totalSalary += p.salary;
        }
        return totalSalary;
    }

    function getYoungest() {
        let youngest = people[0] ? people[0].age : Infinity;
        for (const p of people) {
            if (p.age < youngest) youngest = p.age;
        }
        return youngest;
    }
}

module.exports = getYoungestAndTotalSalary;