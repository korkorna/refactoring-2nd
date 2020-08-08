'use strict';

const plays = require('./plays.json');
const invoices = require('./invoices.json');

function playFor(perf) {
    return plays[perf.playID];
}

function volumeCreditsFor(aPerformance) {
    let result = Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === playFor(aPerformance).type) result += Math.floor(aPerformance.audience / 5);
    return result;
}

function statement(invoice, plays) {

    let totalAmount = 0;

    let volumeCredits = 0;

    let result = `Statement for ${invoice.customer}\n`

    const format = new Intl.NumberFormat("en-US",
        {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2
        }).format;

    for(let perf of invoice.performances) {
        volumeCredits += volumeCreditsFor(perf);

        // Print line for this order
        // #refactor 3 - 변수 인라인하기
        result += ` ${playFor(perf).name}: ${format(amountFor(perf)/100)} (${perf.audience} seats)\n`;

        totalAmount += amountFor(perf);
    }

    result += `Amount owed is ${format(totalAmount / 100)}\n`;

    result += `You earned ${volumeCredits} credits\n`;

    return result;
}

// #refactor 4 - 2 필요없어진 매개변수 제거
function amountFor(aPerformance) {  //# 명확한 이름으로 변경
    let result = 0;
    // #refactor 4 - 1 매개변수를 쿼리 함수로 변경
    switch(playFor(aPerformance).type) {
        case "tragedy":
            result = 40000;

            if(aPerformance.audience > 30) {
                result += 1000 * (aPerformance.audience - 30);
            }

            break;

        case "comedy":
            result = 30000;

            if(aPerformance.audience > 20) {
                result += 10000 + 500 * (aPerformance.audience - 20);
            }

            result += 300 * aPerformance.audience;

            break;

        default:
            // #refactor 4 - 1 매개변수를 쿼리 함수로 변경
            throw new Error(`Unknown type: ${playFor(aPerformance).type}`);
    }
    return result;
}

// Run the code
const result = statement(invoices[0], plays);
console.log(result);