'use strict';

function rating(voyage, history) { // 투자등급
    return createRating(voyage, history).value;
}

function createRating(voyage, history) {
    if (voyage.zone === "china" && history.some(v => "china" === v.zone)) {
        return new ExperiencedChinaRating(voyage, history);
    } else {
        return new Rating(voyage, history);
    }
}

class Rating {
    constructor(voyage, history) {
        this.voyage = voyage;
        this.history = history;
    }

    get value() {
        const vpf = this.voyageProfitFactor;
        const vr = this.voyageRisk;
        const chr = this.captainHistoryRisk;
        if (vpf * 3 > (vr + chr * 2)) return "A";
        else return "B";
    }

    get voyageRisk() { // 항해 경로 위험요소
        let result = 1;
        if (this.voyage.length > 4) result += 2;
        if (this.voyage.length > 8) result += this.voyage.length - 8;
        if (["중국", "동인도"].includes(this.voyage.zone)) result += 4;
        return Math.max(result, 0);
    }

    get captainHistoryRisk() { // 선장의 항해 이력 위험요소
        let result = 1;
        if (this.history.length < 5) result += 4;
        result += this.history.filter(v => v.profit < 0).length;
        return Math.max(result, 0);
    }

    get hasChinaHistory() {  // 중국을 경유하는가?
        return this.history.some(v => "china" === v.zone);
    }

    get voyageProfitFactor() { // 수익 요인
        let result = 2;
        if (this.voyage.zone === "중국") result += 1;
        if (this.voyage.zone === "동인도") result += 1;
        result += this.voyageAndHistoryLengthFactor;
        return result;
    }

   get voyageAndHistoryLengthFactor() {
        let result = 0;
        if (this.history.length > 8) result += 1;
        if (this.voyage.length > 14) result -= 1;
        return result;
    }
}

class ExperiencedChinaRating extends Rating {
    get captainHistoryRisk() { // 선장의 항해 이력 위험요소
        const result = super.captainHistoryRisk - 2;
        return Math.max(result, 0);
    }

    get voyageAndHistoryLengthFactor() {
        let result = 3;
        if (this.history.length > 10) result += 1;
        if (this.voyage.length > 12) result += 1;
        if (this.voyage.length > 18) result -= 1;
        return result;
    }
}

module.exports = {
    rating
}