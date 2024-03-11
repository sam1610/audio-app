/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AudioRecCreateFormInputValues = {
    txt?: string;
    imageUrl?: string;
    audioUrl?: string;
};
export declare type AudioRecCreateFormValidationValues = {
    txt?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
    audioUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AudioRecCreateFormOverridesProps = {
    AudioRecCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    txt?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    audioUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AudioRecCreateFormProps = React.PropsWithChildren<{
    overrides?: AudioRecCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AudioRecCreateFormInputValues) => AudioRecCreateFormInputValues;
    onSuccess?: (fields: AudioRecCreateFormInputValues) => void;
    onError?: (fields: AudioRecCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AudioRecCreateFormInputValues) => AudioRecCreateFormInputValues;
    onValidate?: AudioRecCreateFormValidationValues;
} & React.CSSProperties>;
export default function AudioRecCreateForm(props: AudioRecCreateFormProps): React.ReactElement;
