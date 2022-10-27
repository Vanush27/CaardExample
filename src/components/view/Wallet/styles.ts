import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    new_wallet_container: {
        // marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    top_bar: {
        height: 90,
        justifyContent: 'center',
        // backgroundColor: '#404CB3',
        width: ' -webkit-fill-available',
        marginBottom: 20,
    },
    new_wallet_image: {marginRight: 40},
    new_wallet: {
        width: 300,
        height: 96,
        borderRadius: 12,
        justifyContent: 'center',
        // backgroundColor: '#404CB3',
        flexDirection: 'row',
        alignItems: 'center',
    },
    shadowProp: {
        shadowOffset: {width: 0, height: 0},
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 90,
    },
    new_wallet_text: {
        textTransform: 'uppercase',
        color: '#FFFFFF',
        fontFamily: 'nunito',
        fontWeight: '700',
        fontSize: 16,
    },
});
