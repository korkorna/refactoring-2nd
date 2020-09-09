'use strict';

const _organization = { name: "애크미 구스베리", country: "GB" };

class Organization {
    constructor(data) {
        this._data = data;
    }
    set name(aString) {
        this._data.name = aString;
    }
}

const organization = new Organization(_organization);
function getRawDataofOrganzation() {
    return organization._data;
}
function getOrganization() {
    return organization;
}

module.exports = {
    organization,
    getRawDataofOrganzation,
    getOrganization
};