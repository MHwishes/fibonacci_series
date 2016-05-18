'use strict';

function fibonacci_series(n) {
    var fibonacciArray = [0];
    for (var i = 0; i <= n; i++) {
        if (i === 1) {
            fibonacciArray.push(1);
        }
        if (i > 1) {
            fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
        }
    }

    return fibonacciArray;
}

module.exports = fibonacci_series;
