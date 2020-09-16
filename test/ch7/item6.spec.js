const assert = require('chai').assert;
const expect = require('chai').expect;

const { TrackingInformation, Shipment } = require('../../src/ch7/item6');

describe('Inline Class TrackingInformation', function () {
    let tranckingInformation,
        shipment;

    beforeEach(function () {
        tranckingInformation = new TrackingInformation();
        tranckingInformation.shippingCompany = 'CJ통운';
        tranckingInformation.trackingNumber = 1111;

        shipment = new Shipment();
        shipment.trackingInformation = tranckingInformation;
    })

    it('vendor 조회', function () {
        expect(shipment.trackingInfo).equal('CJ통운: 1111');
    });

    it('vendor 수정', function () {
        shipment.shippingCompany = '한진택배';
        expect(shipment.trackingInfo).equal('한진택배: 1111');
    });
});

