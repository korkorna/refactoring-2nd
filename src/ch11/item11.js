'use strict';

function calculate () {
    const totalAscent = calculateAscent();
    let totalTime = calculateTime();
    let totalDistance = calculateDistance();
    const pace = totalTime / 60 / totalDistance;

    function calculateAscent() {
        let result = 0;
        for (let i = 1; i < points.length; i++) {
            const verticalChange = points[i].elevation - points[i-1].elevation;
            result += (verticalChange > 0) ? verticalChange : 0;
        }
        return result;
    }
    function calculateTime() {
        // pass
        return 0;
    }
    function calculateDistance() {
        // pass
        return 0;
    }
}

module.exports = calculate;