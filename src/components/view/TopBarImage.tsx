import {useSelector} from "react-redux";
import {Image, Text, View} from "react-native";
import React from "react";


const TopBarImage = () => {

    const dataUser = useSelector((state: any) => state.user.dataUser);

    return (
        <View style={{
            backgroundColor: '#404CB3',
            width: ' -webkit-fill-available',
            marginBottom: 20
        }}>

            <View style={{
                height: 90,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: 20,
            }}>
                <View>
                    <Text style={{
                        fontFamily: 'nunito',
                        fontWeight: '700',
                        fontSize: 14,
                        textTransform: 'capitalize',
                        color: '#FFFFFF'
                    }}>{dataUser.name} {dataUser.lastName}</Text></View>


                <View>
                    <Image style={{
                        height: 46,
                        width: 46,
                        borderRadius: '50%',
                        backgroundColor: 'red'
                    }}
                           source={dataUser.image}/>
                </View>
            </View>
        </View>
    )
}

export default TopBarImage;