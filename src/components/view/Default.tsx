import {Image, Text, View} from "react-native";
import React from "react";
import TopBarImage from "./TopBarImage";
import {ButtonCustom} from "../shared";
import {COLOR_DELETE_BUTTON, COLOR_EDIT_BUTTON, LIT} from "../../constants";
import {useForm} from "react-hook-form";
import {ImagesAssets} from '../../../assets/ImagesAssets';

const Default = () => {


    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm();

    // constructor(props) {
    //     super(props);
    //     this.state = { text: '' };
    // }
    //
    // handleChange = (text) => {
    //     let textTemp = text;
    //     if (textTemp[0] !== '1' && textTemp[0] !== '0') {
    //         textTemp = '';
    //     }
    //     if (textTemp.length === 2) {
    //         if (parseInt(textTemp.substring(0, 2)) > 12 || parseInt(textTemp.substring(0, 2)) == 0) {
    //             textTemp = textTemp[0];
    //         } else if (this.state.text.length === 2) {
    //             textTemp += '/';
    //         } else {
    //             textTemp = textTemp[0];
    //         }
    //     }
    //     this.setState({text: textTemp})
    // }

    //         <TextInput
    //             keyboardType={'numeric'}
    //             onChangeText={this.handleChange}
    //             value={this.state.text}
    //             maxLength={5}
    //         />


    // const [state, setState] = useState<any>('');
    // const handleChange = (text:any) => {
    //     let textTemp = text;
    //     if (textTemp[0] !== '1' && textTemp[0] !== '0') {
    //         textTemp = '';
    //     }
    //     if (textTemp.length === 2) {
    //         if (parseInt(textTemp.substring(0, 2)) > 12 || parseInt(textTemp.substring(0, 2)) == 0) {
    //             textTemp = textTemp[0];
    //         } else if (textTemp.length === 2) {
    //             textTemp += '/';
    //         } else {
    //             textTemp = textTemp[0];
    //         }
    //     }
    //     setState(textTemp)
    // }

    const onSubmit = () => {

        console.log('sc');
    };


    return (
        <View>
            <TopBarImage/>

            <View style={{margin: 16, marginBottom: 18, borderRadius: 12,}}>

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
                        <Image style={{height: 64 , width: 87}}
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


        </View>
    )

}

export default Default;

