import React from 'react';
import {useMask, filters, modes} from './index';
import {MaskInputProps, MaskOutputProps} from "./types/components-type";


export const MaskInput = (props: MaskInputProps) => {

    const mask = useMask(props.config || props.preset || {
        mask: props.mask || '*',
        filter: props.filter || filters.NUMBERS,
        mode: props.mode || modes.NORMAL,
        placeholder: props.placeholder || undefined
    } || {});

    return (<input {...props} value={mask(props.value)}/>);
    // return React.createElement('input', { ...props, value: mask(props.value || '') });

}

export const MaskOutput = (props: MaskOutputProps) => {

    const mask = useMask(props.config || props.preset || {
        mask: props.mask || '*',
        filter: props.filter || filters.NUMBERS,
        mode: props.mode || modes.NORMAL,
        placeholder: props.placeholder || undefined
    } || {});

    return (<>{mask(props.children || '')}</>);
    // return React.createElement(React.Fragment, null, mask(props.children || ''));
}
