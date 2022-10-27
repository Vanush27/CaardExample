import {Image, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import TopBarImage from "./TopBarImage";
import {ButtonCustom} from "../shared";
import {COLOR_DELETE_BUTTON, COLOR_EDIT_BUTTON, LIT} from "../../constants";
import {useForm} from "react-hook-form";
import {ImagesAssets} from '../../../assets/ImagesAssets';

const Default = () => {

    const [state, setState] = useState<string>('');

    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm();


    const handleChange = (text: string) => {
        const value = text?.replace(/^(\d{2})(\d{2})/, '$1/$2');
        setState(value)

    }


    const onSubmit = () => {
        console.log('sc');
    };

    return (
        <View>
            <TopBarImage/>

            <View style={{margin: 16, marginBottom: 18, borderRadius: 12}}>
                <View style={{
                    backgroundColor: '#243972',
                    borderRadius: 12,
                    height: 96,
                    shadowOffset: {width: 0, height: 0},
                    shadowColor: '#000000',
                    shadowOpacity: 0.1,
                    shadowRadius: 90,
                }}>
                    <View>
                        <Image style={{height: 64, width: 87}}
                               source={{uri: ImagesAssets.masterCard}}/>
                    </View>
                    <Text></Text>
                </View>

                <View style={{backgroundColor: '#FFFFFF'}}>
                    <View style={{marginLeft: 18, marginRight: 14, marginTop: 15, marginBottom: 12}}>

                        <ButtonCustom
                            text="Transfer"
                            color={COLOR_EDIT_BUTTON}
                            borderRadius={6}
                            height={43}
                            onPress={handleSubmit(onSubmit)}
                        />
                    </View>
                    <View style={{marginLeft: 18, marginRight: 14, marginBottom: 24}}>
                        <ButtonCustom
                            text="Withdrawal"
                            color={COLOR_EDIT_BUTTON}
                            borderRadius={6}
                            height={43}
                            onPress={handleSubmit(onSubmit)}
                        />

                    </View>
                    <View style={{flexDirection: "row", justifyContent: 'space-evenly'}}>
                        <View> <ButtonCustom
                            text="Edit"
                            color={COLOR_EDIT_BUTTON}
                            borderRadius={6}
                            height={43}
                            size={LIT}
                            onPress={handleSubmit(onSubmit)}
                        /></View>
                        <View> <ButtonCustom
                            text="Delete"
                            color={COLOR_DELETE_BUTTON}
                            borderRadius={6}
                            height={43}
                            size={LIT}
                            onPress={handleSubmit(onSubmit)}
                        /></View>

                    </View>
                </View>
            </View>


            <TextInput
                keyboardType={'numeric'}
                onChangeText={handleChange}
                value={state}
                maxLength={4}
            />
        </View>
    )

}

export default Default;

