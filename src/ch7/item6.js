'use strict';

class Shipment {
    get shippingCompany() {return this._shippingCompany;}
    set shippingCompany(arg) {this._shippingCompany = arg;}
    set trackingNumber(arg) {this._trackingNumber = arg;}
    get trackingNumber() {return this._trackingNumber;}
    get trackingInfo() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
}

module.exports = {
    Shipment
}