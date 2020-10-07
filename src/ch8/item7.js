'use strict';

function getYoungestAndTotalSalary(people) {
    let youngest = people[0] ? people[0].age : Infinity;
    let totalSalary = 0;
    for (const p of people) {
        if (p.age < youngest) youngest = p.age;
        totalSalary += p.salary;
    }
    return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}

module.exports = getYoungestAndTotalSalary;