'use strict';


function sendAlert() {
    alert('악당 발견!');
}

function checkForMiscreant(people) {
    let found = false;
    for (const p of people) {
        if (!found) {
            if (p === '조커') {
                sendAlert();
                found = true;
            }
            if (p === '사루만') {
                sendAlert();
                found = true;
            }
        }
    }
}

module.exports = checkForMiscreant;