"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thenPrt = exports.prt = void 0;
var prt = function (obj) {
    console.log(obj);
    return obj;
};
exports.prt = prt;
var thenPrt = function (promise) {
    promise.then(function (res) {
        console.log(res);
    });
    return promise;
};
exports.thenPrt = thenPrt;
