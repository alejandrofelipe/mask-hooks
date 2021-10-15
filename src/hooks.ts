import {useState} from 'react';
import {applyMask} from './mask';
import {MaskInputProps, MaskProps, MaskText} from "./types/components-type";


export function useMask(config: MaskInputProps) {

    return (target: MaskText) => applyMask(target, config);
}

export const useMaskState = (initialState: string, config: MaskProps) => {
    const [target, setTarget] = useState(initialState);
    const mask = useMask(config);

    return [target, (newTarget: string) => setTarget(mask(newTarget))];
}
