'use strict';

module.exports = function readingOutsideRange(station, min, max) {
  return station.readings
    .filter(r => r.temp < min || r.temp > max);
};