'use strict';

function plumages(birds) {
    return new Map(birds.map(b => [b.name, plumage(b)]));
}

function speeds(birds) {
    return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {   //깃털상태
    return new Bird(bird).plumage;
}

function airSpeedVelocity(bird) {  // 비행 속도
    return new Bird(bird).airSpeedVelocity;
}

class Bird {
    constructor(birdObject) {
        Object.assign(this, birdObject);
    }

    get plumage() {   //깃털상태
        switch (this.type) {
            case '유럽 제비':
                return '보통이다';
            case '아프리카 제비':
                return (this.numberOfCoconuts > 2) ? "지쳤다" : "보통이다";
            case '노르웨이 파랑 앵무':
                return (this.voltage > 1000) ? "그을렸다" : "예쁘다";
            default:
                return "알 수 없다";
        }
    }

    get airSpeedVelocity() {  // 비행 속도
        switch (this.type) {
            case '유럽 제비':
                return 35;
            case '아프리카 제비':
                return 40 - 2 * this.numberOfCoconuts;
            case '노르웨이 파랑 앵무':
                return (this.isNailed) ? 0 : 10 + this.voltage / 10;
            default:
                return null;
        }
    }
}

module.exports = {
    plumages,
    speeds
}