import {Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {LARGE} from '../../../constants';
import {BorderStyle, ContainerCommonStyle, TextCommonStyle} from "./typing";

type ButtonCustomProps = {
    text?: string
    onPress?: () => void
    color?: string
    type?: string
    textTransform?: string
    size?: number,
    height?: number
    borderRadius?: number

}

const ButtonCustom: FC<ButtonCustomProps> = ({ // TODO Functional Component
                                                 text,
                                                 onPress,
                                                 color,
                                                 type = 'filled',
                                                 textTransform = 'uppercase',
                                                 size = LARGE,
                                                 height = 43,
                                                 borderRadius = 6,
                                             }) => { // todo


    const btnTextColor: string = type === 'filled' ? '#ffffff' : '#404CB3'; // todo

    const containerCommonStyle: ContainerCommonStyle = { // todo
        backgroundColor: color,
        paddingVertical: 8,
        width: size,
        borderRadius: borderRadius,
        height: height,
    };

    const textCommonStyle: TextCommonStyle | any  = { // todo
        color: btnTextColor,
        fontSize: 16,
        textTransform: textTransform,
        textAlign: 'center',
    };

    const border: BorderStyle | false = type === 'outlined' && {borderColor: '#e7e7e7', borderWidth: 2}; // todos

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={[containerCommonStyle, border]}>
                <Text style={[textCommonStyle]}> {text} </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ButtonCustom;
