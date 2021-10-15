"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modes = exports.filters = void 0;
exports.filters = {
    NUMBERS: /\D/gim,
    LETTERS: /[^a-z]/gim,
    CHARACTERS: /\W/gim,
    NONE: null,
};
exports.modes = {
    AUTO: 'auto',
    NORMAL: 'normal',
    REVERSE: 'reverse'
};
