'use strict'

function findMissing(firstArr, secondArr){

    //Check if valid inputs were entered
    if (firstArr.constructor !== Array || secondArr.constructor !== Array) return 'Invalid input';

    //Find the sum of numbers in each array
    var firstSum = firstArr.reduce (function(a, b) {return a + b}, 0),
        secondSum = secondArr.reduce (function(a, b) {return a + b}, 0);

    //return the difference
    return Math.abs(firstSum - secondSum);
}

module.exports = findMissing;