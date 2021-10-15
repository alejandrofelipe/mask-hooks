import { MaskProps, MaskText } from "./types/components-type";
import { MaskFilter } from "./types/constants-type";
export default function mask(target?: MaskText, mask?: string, filter?: MaskFilter, mode?: string, placeholder?: string): string;
export declare function applyMask(target: MaskText, config: MaskProps): string;
