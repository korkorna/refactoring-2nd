'use strict';

function foundPerson(people) {
    const candidates = ["Don", "John", "Kent"];
    return people.find(p => candidates.includes(p)) || '';
}

module.exports = foundPerson;
