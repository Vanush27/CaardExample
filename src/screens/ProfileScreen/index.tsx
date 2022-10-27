import React, { FC } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const ProfileScreen: FC = () => {
  const userData = useSelector((state: any) => state.user.data);
  console.log(userData);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase, 'DrawerNav'>>();

  return (
    <View>
      <Text style={{ paddingTop: 40 }}>ProfileScreen </Text>
      <Button title="back" onPress={() => navigation.navigate('Wallet')} />
    </View>
  );
};

export default ProfileScreen;
