"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMaskState = exports.useMask = void 0;
var react_1 = require("react");
var mask_1 = require("./mask");
function useMask(config) {
    return function (target) { return (0, mask_1.applyMask)(target, config); };
}
exports.useMask = useMask;
var useMaskState = function (initialState, config) {
    var _a = (0, react_1.useState)(initialState), target = _a[0], setTarget = _a[1];
    var mask = useMask(config);
    return [target, function (newTarget) { return setTarget(mask(newTarget)); }];
};
exports.useMaskState = useMaskState;
