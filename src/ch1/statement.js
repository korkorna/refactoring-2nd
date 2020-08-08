'use strict';

const plays = require('./plays.json');
const invoices = require('./invoices.json');

function statement(invoice, plays) {


    let result = `Statement for ${invoice.customer}\n`

    for(let perf of invoice.performances) {
        // Print line for this order
        result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience} seats)\n`;
    }

    let totalAmount = 0;
    for(let perf of invoice.performances) {
        totalAmount += amountFor(perf);
    }

    result += `Amount owed is ${usd(totalAmount)}\n`;

    result += `You earned ${totalVolumeCredits()} credits\n`;

    return result;


    function totalVolumeCredits() {
        let volumeCredits = 0;
        for (let perf of invoice.performances) {
            volumeCredits += volumeCreditsFor(perf);
        }
        return volumeCredits;
    }

    function playFor(perf) {
        return plays[perf.playID];
    }

    function volumeCreditsFor(aPerformance) {
        let result = Math.max(aPerformance.audience - 30, 0);
        if ("comedy" === playFor(aPerformance).type) result += Math.floor(aPerformance.audience / 5);
        return result;
    }

    function usd(aNumber) {
        return new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2
            }).format(aNumber/100);
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
}

// Run the code
const result = statement(invoices[0], plays);
console.log(result);