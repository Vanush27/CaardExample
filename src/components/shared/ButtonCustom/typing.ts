import {TextInput, TextInputProps} from "react-native";

export type ContainerCommonStyle = {
    backgroundColor: string | undefined,
    paddingVertical: number
    width: number
    borderRadius: number
    height: number
};

export type TextCommonStyle = {
    color?: string
    fontSize?: number
    textTransform?: string
    textAlign?: string
};

export type BorderStyle = {borderColor: string, borderWidth: number}