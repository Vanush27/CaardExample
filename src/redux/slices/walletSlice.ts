import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type WalletItem = {
    walletName?: string;
    balance?: string;
    cardType?: string;
    cardNumber?: number;
    expiryDate?: number;
    secureCode?: number;
    nameCard?: string;
    country?: string;
    zipCode?: number;
    city?: string;
    state?: string;
    address?: string | number;
};

type InitialStateProps = {
    walletList: WalletItem[];
};

export const initialState: InitialStateProps = {
    walletList: [],
};

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        addNewWallet: (state, action: PayloadAction<WalletItem>) => {
            state.walletList = [...state.walletList, action.payload];
        },
    },
});

export const {addNewWallet} = walletSlice.actions;
export default walletSlice.reducer;
