const assert = require('chai').assert;
const expect = require('chai').expect;

const { Shipment } = require('../../src/ch7/item6');

describe('Inline Class TrackingInformation', function () {
    let shipment;

    beforeEach(function () {
        shipment = new Shipment();
        shipment.shippingCompany = 'CJ통운';
        shipment.trackingNumber = 1111;
    })

    it('vendor 조회', function () {
        expect(shipment.trackingInfo).equal('CJ통운: 1111');
    });

    it('vendor 수정', function () {
        shipment.shippingCompany = '한진택배';
        expect(shipment.trackingInfo).equal('한진택배: 1111');
    });

    it('trackingNumber 수정', function () {
        shipment.trackingNumber = '2222';
        expect(shipment.trackingInfo).equal('CJ통운: 2222');
    });
});

