'use strict';

function xxNewEngland(stateCode) {
    return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

module.exports = function isNewEngland(aCustomer) {
    return xxNewEngland(aCustomer.address.state);
}