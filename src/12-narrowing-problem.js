"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var user = {
    id: 123,
    first: "Janusz",
};
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.name = "";
        // public sum(a: number, b: number) {
        //   return a + b;
        // }
        // public sum(a: number, b: number, c: number) {
        //   return a + b + c;
        // }
    }
    return Calculator;
}());
var calculator = new Calculator();
calculator.name = "aaaa";
// b = 3;
function sum(a) {
    return a;
}
var sum3 = function () {
    return null;
};
var sum2 = function (a) {
    return a;
};
var coerceAmount = function (amount) {
    // JS
    if (typeof amount === "number") {
        return amount;
    }
    return amount.amount;
};
(0, vitest_1.it)("Should return the amount when passed an object", function () {
    (0, vitest_1.expect)(coerceAmount({ amount: 20 })).toEqual(20);
});
(0, vitest_1.it)("Should return the amount when passed a number", function () {
    (0, vitest_1.expect)(coerceAmount(20)).toEqual(20);
});
