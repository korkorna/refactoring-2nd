'use strict';

class TrackingInformation {
    get shippingCompany() {return this._shippingCompany;}
    set shippingCompany(arg) {this._shippingCompany = arg;}
    get trackingNumber() {return this._trackingNumber;}
    set trackingNumber(arg) {this._trackingNumber = arg;}
}

class Shipment {
    set shippingCompany(arg) {this._trackingInformation._shippingCompany = arg;}
    get trackingInfo() {
        return `${this._trackingInformation.shippingCompany}: ${this._trackingInformation.trackingNumber}`;
    }
    get trackingInformation() {return this._trackingInformation;}
    set trackingInformation(aTrackingInformation) {
        this._trackingInformation = aTrackingInformation;
    }
}

module.exports = {
    TrackingInformation, Shipment
}