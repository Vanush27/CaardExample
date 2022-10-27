import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from '../../screens';
import {Wallet} from '../../components';
import {useSelector} from 'react-redux';
import DrawerNavigator from '../DrawerNavigator';
import CreateProfile from '../../components/view/CreateProfile';
import NewWallet from '../../components/view/Wallet/NewWallet';

const Stack = createNativeStackNavigator();

const RootNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="DrawerNav">
        <Stack.Screen name="DrawerNav" component={DrawerNavigator}/>

        {/*<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />*/}
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Wallet"
                      component={Wallet}
                      options={{
                          headerShown: true,
                          headerTitle: "sds",

                      }}/>
        <Stack.Screen name="NewWallet" component={NewWallet} options={{headerShown: true}}/>
    </Stack.Navigator>
);

export const MainNavigator = () => {
    const loggedIn = useSelector((state: any) => state.user.loggedIn);
    return !loggedIn ? <CreateProfile/> : <RootNavigator/>;
};
