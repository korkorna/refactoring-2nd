'use strict';

const plays = require('./plays.json');
const invoices = require('./invoices.json');

function statement(invoice, plays) {
    const statementData = createStatementData(invoice, plays);
    return renderPlainText(statementData, plays);

    function createStatementData(invoice, plays) {
        const statementData = {};
        statementData.customer = invoice.customer;
        statementData.performances = invoice.performances.map(enrichPerformance);
        statementData.totalVolumeCredits = totalVolumeCredits(statementData);
        statementData.totalAmount = totalAmount(statementData);
        return statementData;
    }

    function enrichPerformance(aPerformance) {
        const result = Object.assign({}, aPerformance);     // shallow copy
        result.play = playFor(result);
        result.amount = amountFor(result);
        result.volumeCredits = volumeCreditsFor(result);
        return result;
    }

    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }

    function amountFor(aPerformance) {
        let result = 0;
        switch(aPerformance.play.type) {
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
                throw new Error(`Unknown type: ${aPerformance.play.type}`);
        }
        return result;
    }

    function volumeCreditsFor(aPerformance) {
        let result = Math.max(aPerformance.audience - 30, 0);
        if ("comedy" === aPerformance.play.type) result += Math.floor(aPerformance.audience / 5);
        return result;
    }

    function totalVolumeCredits(statementData) {
        return statementData.performances
            .reduce((total, p) => total + p.volumeCredits, 0);
    }

    function totalAmount(statementData) {
        return statementData.performances
            .reduce((total, p) => total + p.amount, 0);
    }
}

function renderPlainText(statementData, plays) {
    let result = `Statement for ${statementData.customer}\n`
    for (let perf of statementData.performances) {
        result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
    }
    result += `Amount owed is ${usd(statementData.totalAmount)}\n`;
    result += `You earned ${statementData.totalVolumeCredits} credits\n`;
    return result;

    function usd(aNumber) {
        return new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2
            }).format(aNumber/100);
    }

}

// Run the code
const result = statement(invoices[0], plays);
console.log(result);