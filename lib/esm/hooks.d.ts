import { MaskInputProps, MaskProps, MaskText } from "./types/components-type";
export declare function useMask(config: MaskInputProps): (target: MaskText) => string;
export declare const useMaskState: (initialState: string, config: MaskProps) => (string | ((newTarget: string) => void))[];
