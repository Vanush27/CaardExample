import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import NewWallet from './NewWallet';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {ImagesAssets} from '../../../../assets/ImagesAssets';

import {styles} from './styles';
import TopBarImage from "../TopBarImage";
import {useAppSelector} from "../../../hooks/hooks";
import {WalletItem} from "../../../redux/slices/walletSlice";

const Wallet = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase, 'DrawerNav'>>();
    const walletList = useAppSelector(state => state.wallet.walletList) // Todo new


    const onPressNewWallet = () => {
        navigation.navigate('NewWallet');
    };

    return (
        <View style={styles.new_wallet_container}>
            <TopBarImage/>

            <View>
                <TouchableOpacity style={styles.shadowProp}
                                  onPress={onPressNewWallet} activeOpacity={0.8}>
                    <View style={styles.new_wallet}>
                        <View style={styles.new_wallet_image}>
                            <Image source={{uri: ImagesAssets.wallet}}/>
                        </View>
                        <View>
                            <Text style={styles.new_wallet_text}>Add new wallet</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>


            <View>
                {walletList?.map((item: WalletItem) => {
                    return <View>{item.cardType}</View>;
                })}
            </View>
        </View>
    );
};

export default Wallet;
