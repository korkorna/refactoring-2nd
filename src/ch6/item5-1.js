'use strict'

function circumference(radius) {
    return 2 * Math.PI * radius;
}

/**
 *
 * @deprecate 'circum 함수는 앞으로 없어질 예정이니 circumference를 이용하세요.'
 */
module.exports = function circum(radius) {
    return circumference(radius);
};