"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var presets = {
    ONLY_NUMBERS: {
        mask: '*',
        mode: constants_1.modes.NORMAL,
    },
    DATE_STAMP: {
        mask: '????-??-??'
    },
    DATE_PTBR: {
        mask: '??/??/????'
    },
    DATETIME_STAMP: {
        mask: '????-??-?? ??:??:??',
    },
    DATETIME_PTBR: {
        mask: '??/??/???? ??:??',
    },
    PHONE_USA: {
        mask: '(???) ???-????',
        mode: constants_1.modes.NORMAL,
    },
    PHONE_BR: {
        mask: ['(??) ?????-????', '(??) ????-????'],
        mode: constants_1.modes.NORMAL,
    },
    CURRENCY_POINT: {
        mask: '{3|,}.??',
        mode: constants_1.modes.REVERSE,
        placeholder: '0'
    },
    CURRENCY_COMMA: {
        mask: '{3|.},??',
        mode: constants_1.modes.REVERSE,
        placeholder: '0'
    },
    CURRENCY_PTBR: {
        mask: 'R$ {3|.},??',
        mode: constants_1.modes.REVERSE,
        placeholder: '0'
    },
    DOCUMENT_CPF: {
        mask: '???.???.???-??',
        mode: constants_1.modes.REVERSE,
    },
    DOCUMENT_CNPJ: {
        mask: '??.???.???/????-??',
        mode: constants_1.modes.REVERSE,
    },
    DOCUMENT_CPF_CNPJ: {
        mask: ['???.???.???-??', '??.???.???/????-??'],
    },
    IP_V4: {
        mask: '???.???.???.???',
        mode: constants_1.modes.NORMAL,
    }
};
exports.default = presets;
