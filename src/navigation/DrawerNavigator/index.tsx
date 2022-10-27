import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Wallet} from '../../components';
import {Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import CreateProfile from '../../components/view/CreateProfile';
import Default from "../../components/view/Default";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const dataUser = useSelector((state: any) => state.user.dataUser);

    return (
        <Drawer.Navigator
            useLegacyImplementation
            initialRouteName="Home"
            screenOptions={{
                drawerPosition: 'right',
                drawerType: 'front',
                drawerStyle: {
                    // backgroundColor: '#404CB2',
                    width: 305,
                },
                headerShown: false,
            }}>
            {/*<Drawer.Screen*/}
            {/*    options={{*/}
            {/*        drawerIcon: ({focused, size}): any => (*/}
            {/*            <View*/}
            {/*                style={{*/}
            {/*                    flexDirection: 'column',*/}
            {/*                    alignItems: 'center',*/}
            {/*                    justifyContent: 'center',*/}
            {/*                    marginLeft: 80,*/}
            {/*                }}>*/}
            {/*                <Image*/}
            {/*                    style={{*/}
            {/*                        width: 100,*/}
            {/*                        height: 100,*/}
            {/*                        borderRadius: "50%",*/}
            {/*                        alignItems: 'center',*/}
            {/*                        justifyContent: 'center',*/}
            {/*                        marginBottom: 20,*/}
            {/*                        resizeMode: 'cover',*/}
            {/*                    }}*/}
            {/*                    source={dataUser?.image}*/}
            {/*                />*/}
            {/*                <Text style={{textTransform: 'uppercase', color: 'red'}}>*/}
            {/*                    {dataUser?.name + ' ' + dataUser?.lastName}*/}
            {/*                </Text>*/}
            {/*            </View>*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*    name=" "*/}
            {/*    component={Wallet}*/}
            {/*/>*/}

            <Drawer.Screen
                options={{
                    // headerTintColor: '#fff',
                    drawerItemStyle: {
                        // backgroundColor: '#b46ede',
                        borderBottomWidth: 2,
                        // borderColor: '#bb0737',
                        marginLeft: 20,
                        marginRight: 20,
                    },
                    headerTintColor: undefined,
                    title: 'Default',
                    headerStyle: {
                        backgroundColor: '#e00e3f',
                    },
                }}
                name="Default"
                component={Default}
            />

            {/*<Drawer.Screen*/}
            {/*    name="Wallet"*/}
            {/*    component={Wallet}*/}
            {/*    options={{*/}
            {/*        drawerContentStyle: {*/}
            {/*            backgroundColor: '#ffffff',*/}
            {/*        },*/}
            {/*        drawerItemStyle: {*/}
            {/*            // backgroundColor: '#b46ede',*/}
            {/*            borderBottomWidth: 1,*/}
            {/*            // borderColor: '#bb0737',*/}
            {/*            marginLeft: 20,*/}
            {/*            marginRight: 20,*/}
            {/*        },*/}
            {/*    }}*/}
            {/*/>*/}
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
