'use strict';

const plays = require('./plays.json');
const invoices = require('./invoices.json');
const createStatementData = require('./createStatementData.js');

function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(statementData) {
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