'use strict';

function localShippingRules(country) {
    const data = countryData.shippingRules[country];
    if (data) return new ShippingRules(data);
    else new OrderProcessingError(-23);
}

function calculateShippingCosts(anOrder) {
    // 관련없는 코드
    const shippingRules = localShippingRules(anOrder.country);
    // 더 관련없는 코드
}

class OrderProcessingError extends Error {
    constructor(errorCode) {
        super('주문 처리 오류 ${errorCode}');
        this.code = errorCode;
        this._errorCode = errorCode;
    }

    get name() {
        return "OrderProcessingError";
    }
}

class Client1 {
    run() {
        const errorList = [];
        const status;
        try {
            status = calculateShippingCosts(orderData);
        } catch (e) {
            if (e instanceof OrderProcessingError)
                errorList.push({order: orderData, errorCode: e.code});
            else
                throw e;
        }
    }
}