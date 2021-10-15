declare const presets: {
    ONLY_NUMBERS: {
        mask: string;
        mode: string;
    };
    DATE_STAMP: {
        mask: string;
    };
    DATE_PTBR: {
        mask: string;
    };
    DATETIME_STAMP: {
        mask: string;
    };
    DATETIME_PTBR: {
        mask: string;
    };
    PHONE_USA: {
        mask: string;
        mode: string;
    };
    PHONE_BR: {
        mask: string[];
        mode: string;
    };
    CURRENCY_POINT: {
        mask: string;
        mode: string;
        placeholder: string;
    };
    CURRENCY_COMMA: {
        mask: string;
        mode: string;
        placeholder: string;
    };
    CURRENCY_PTBR: {
        mask: string;
        mode: string;
        placeholder: string;
    };
    DOCUMENT_CPF: {
        mask: string;
        mode: string;
    };
    DOCUMENT_CNPJ: {
        mask: string;
        mode: string;
    };
    DOCUMENT_CPF_CNPJ: {
        mask: string[];
    };
    IP_V4: {
        mask: string;
        mode: string;
    };
};
export default presets;
