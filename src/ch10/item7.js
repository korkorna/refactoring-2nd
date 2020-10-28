'use strict';


function sendAlert() {
    alert('악당 발견!');
}

function checkForMiscreant(people) {
    if (people.some(p => ["조커", "사루만"].includes(p))) sendAlert();
}

module.exports = checkForMiscreant;