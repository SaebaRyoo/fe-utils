'use strict';

function sum(...args) {
    return args.reduce((prev, total) => total + prev, 0);
}

exports.sum = sum;
