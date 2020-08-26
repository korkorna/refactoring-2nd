'use strict';

module.exports = function readingOutsideRange(station, range) {
  return station.readings
    .filter(r => r.temp < range.min || r.temp > range.max);
};