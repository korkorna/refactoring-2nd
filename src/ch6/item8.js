'use strict';

module.exports = function readingOutsideRange(station, min, range) {
  return station.readings
    .filter(r => r.temp < min || r.temp > range.max);
};