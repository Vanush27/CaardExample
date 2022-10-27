import React, {FC, useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {Controller} from 'react-hook-form';

import {ImagesAssets} from '../../../../assets/ImagesAssets';
import {styles} from './styles';

type InputCustomProps = {
    title: string
    placeholder: string
    defaultValue: string
    regName: any
    control: any
    errors: any
    name: string
    isCardCredit?: boolean | undefined
};

const InputCustom: FC<InputCustomProps> = ({
                                               title,
                                               placeholder = title,
                                               defaultValue,
                                               regName,
                                               control,
                                               errors,
                                               name,
                                               isCardCredit,
                                           }) => { // todo

    //debugger // todo

    const addSpaceForFourNumber = (value: string) => // todo utils file
        value
            ?.replace(/[^\dA-Z]/g, '')
            ?.replace(/(.{4})/g, '$1 ')
            ?.trim();

    return (
        <View>
            <Text style={styles.label}>{title}</Text>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value, name}}) => (
                    <View>
                        <TextInput
                            style={styles.input_new_wallet}
                            onBlur={onBlur}
                            onChangeText={(value) =>
                                onChange(isCardCredit ? addSpaceForFourNumber(value) : value)}
                            value={value}
                            placeholder={placeholder}
                            defaultValue={defaultValue}
                            {...regName}
                        />
                        <Image source={ImagesAssets.union}/>
                    </View>
                )}
                name={name}
                rules={{required: true}}
            />
            {errors?.title && <Text>This is required.</Text>}
            {/*todo*/}
        </View>
    );
};

export default InputCustom;
