'use strict';

class TrackingInformation {
}

class Shipment {
    get shippingCompany() {return this._shippingCompany;}
    set shippingCompany(arg) {this._shippingCompany = arg;}
    set trackingNumber(arg) {this._trackingNumber = arg;}
    get trackingNumber() {return this._trackingNumber;}
    get trackingInfo() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
    get trackingInformation() {return this._trackingInformation;}
    set trackingInformation(aTrackingInformation) {
        this._trackingInformation = aTrackingInformation;
    }
}

module.exports = {
    TrackingInformation, Shipment
}