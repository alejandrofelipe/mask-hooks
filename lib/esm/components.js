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
import React from 'react';
import { useMask, filters, modes } from './index';
export var MaskInput = function (props) {
    var mask = useMask(props.config || props.preset || {
        mask: props.mask || '*',
        filter: props.filter || filters.NUMBERS,
        mode: props.mode || modes.NORMAL,
        placeholder: props.placeholder || undefined
    } || {});
    return (React.createElement("input", __assign({}, props, { value: mask(props.value) })));
};
export var MaskOutput = function (props) {
    var mask = useMask(props.config || props.preset || {
        mask: props.mask || '*',
        filter: props.filter || filters.NUMBERS,
        mode: props.mode || modes.NORMAL,
        placeholder: props.placeholder || undefined
    } || {});
    return (React.createElement(React.Fragment, null, mask(props.children || '')));
};
