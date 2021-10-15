import {MaskFilter, MaskModes} from "./constants";
import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export type MaskText = string | ReadonlyArray<string> | number | undefined;

export interface MaskInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, MaskProps {
}

export interface MaskOutputProps extends MaskProps {
    children: MaskText;
}

export interface MaskProps {
    mask?: string;
    filter?: MaskFilter;
    mode?: MaskModes;
    placeholder?: string;
    config?: MaskInputProps;
    preset?: MaskInputProps;
}
