"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskOutput = exports.MaskInput = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("./index");
var MaskInput = function (props) {
    var mask = (0, index_1.useMask)(props.config || props.preset || {
        mask: props.mask || '*',
        filter: props.filter || index_1.filters.NUMBERS,
        mode: props.mode || index_1.modes.NORMAL,
        placeholder: props.placeholder || undefined
    } || {});
    return (react_1.default.createElement("input", __assign({}, props, { value: mask(props.value) })));
};
exports.MaskInput = MaskInput;
var MaskOutput = function (props) {
    var mask = (0, index_1.useMask)(props.config || props.preset || {
        mask: props.mask || '*',
        filter: props.filter || index_1.filters.NUMBERS,
        mode: props.mode || index_1.modes.NORMAL,
        placeholder: props.placeholder || undefined
    } || {});
    return (react_1.default.createElement(react_1.default.Fragment, null, mask(props.children || '')));
};
exports.MaskOutput = MaskOutput;
