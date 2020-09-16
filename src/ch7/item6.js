'use strict';

class TrackingInformation {
    get shippingCompany() {return this._shippingCompany;}
    set shippingCompany(arg) {this._shippingCompany = arg;}
    get trackingNumber() {return this._trackingNumber;}
    set trackingNumber(arg) {this._trackingNumber = arg;}
    get display() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
}

class Shipment {
    set shippingCompany(arg) {this._trackingInformation._shippingCompany = arg;}
    get trackingInfo() {
        return this._trackingInformation.display;
    }
    get trackingInformation() {return this._trackingInformation;}
    set trackingInformation(aTrackingInformation) {
        this._trackingInformation = aTrackingInformation;
    }
}

module.exports = {
    TrackingInformation, Shipment
}