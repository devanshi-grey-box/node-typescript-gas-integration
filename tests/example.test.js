"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var example_1 = require("../src/utils/example");
(0, vitest_1.describe)("example util tests", function () {
    (0, vitest_1.it)("adds numbers correctly", function () {
        (0, vitest_1.expect)((0, example_1.add)(2, 3)).toBe(5);
    });
});
