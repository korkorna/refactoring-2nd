'use strict';

module.exports = function isNewEngland(aCustomer) {
    const stateCode = aCustomer.address.state;
    return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}