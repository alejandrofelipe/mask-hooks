"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMask = void 0;
var constants_1 = require("./constants");
function mask(target, mask, filter, mode, placeholder) {
    if (target === void 0) { target = ''; }
    if (mask === void 0) { mask = '*'; }
    if (filter === void 0) { filter = constants_1.filters.NUMBERS; }
    if (mode === void 0) { mode = constants_1.modes.AUTO; }
    if (placeholder === void 0) { placeholder = ''; }
    var result = '';
    var index = 0;
    var repeater = null;
    try {
        target = target.toString();
    }
    catch (e) {
        target = '';
        console.error(e);
    }
    try {
        placeholder = placeholder.toString();
    }
    catch (e) {
        console.error(e);
    }
    var reverse = (mode === 'auto') ? (/^[^?]*?\*.*$/.test((Array.isArray(mask) ? mask[0] : mask)
        .replace(/{\d+\|.+}/i, '*')) || placeholder) : (mode === 'reverse');
    if (target && target.length) {
        if (reverse)
            target = target.split('').reverse().join('');
        if (filter)
            target = target.replace(filter, '');
        if (placeholder)
            target = target.replace(new RegExp('[' + placeholder + ']+$', 'gim'), '');
    }
    if (target === '' || !target)
        return '';
    if (Array.isArray(mask)) {
        mask.sort(function (a, b) { return a.replace(/{\d+\|.+}/i, '*')
            .replace(/[^?*]/gim, '').length - b.replace(/{\d+\|.+}/i, '*').replace(/[^?*]/gim, '').length; });
        for (var c = 0; c < mask.length; c++) {
            if (mask[c].replace(/{\d+\|.+}/i, '*')
                .replace(/[^?*]/gim, '').length >= target.length || c === (mask.length - 1)) {
                mask = mask[c];
                break;
            }
        }
    }
    if (/{\d+\|.+}/i.test(mask)) {
        repeater = mask.match(/{(\d+)\|(.+)}/i);
        mask = mask.replace(/{\d+\|.+}/i, '*');
    }
    if (reverse && /^[^*]*$/gim.test(mask) && target.length > mask.replace(/[^?]/gim, '').length) {
        target = target.substring(1);
    }
    loop: for (var c = reverse ? (mask.length - 1) : 0; reverse ? c >= 0 : c < mask.length; reverse ? c-- : c++) {
        switch (mask.charAt(c)) {
            case '?':
                if (target.charAt(index)) {
                    if (reverse)
                        result = target.charAt(index) + result;
                    else
                        result += target.charAt(index);
                    index++;
                }
                else if (placeholder) {
                    if (reverse)
                        result = placeholder + result;
                    else
                        result += placeholder;
                }
                else
                    break loop;
                break;
            case '*':
                var remaining = repeater
                    ? (target.substring(index).match(new RegExp('.{1,' + repeater[1] + '}', 'g')) || []).join(repeater[2])
                    : target.substring(index);
                if (!remaining && !placeholder)
                    break loop;
                if (reverse) {
                    var finisher = mask.substring(0, c).replace(/[?*]/gim, '');
                    return finisher + ((remaining) ? remaining.split('').reverse().join('') : (placeholder || '')) + result;
                }
                else {
                    var finisher = mask.substring(c + 1).replace(/[?*]/gim, '');
                    return result + ((remaining) ? remaining : (placeholder || '')) + finisher;
                }
            default:
                if (reverse)
                    result = mask.charAt(c) + result;
                else
                    result += mask.charAt(c);
                break;
        }
    }
    var last = reverse ? result.charAt(0) : result.charAt(result.length - 1);
    if (reverse && last !== target.charAt(index - 1) && last !== mask.charAt(0) && last !== placeholder) {
        result = result.substring(1);
    }
    else if (!reverse && last !== target.charAt(index - 1) && last !== mask.charAt(mask.length - 1) && last !== placeholder) {
        result = result.slice(0, -1);
    }
    return result;
}
exports.default = mask;
function applyMask(target, config) {
    return mask(target, config.mask, config.filter, config.mode, config.placeholder);
}
exports.applyMask = applyMask;
