import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type User = {
    name?: string;
    lastName?: string;
    image?: string;
};

type InitialStateProps = {
    dataUser: User | {};    //TODO
    error: boolean;
    isLoading: boolean;
    loggedIn: boolean;
};

export const initialState: InitialStateProps = {
    dataUser: {},
    error: false,
    isLoading: false,
    loggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => { // todo {payload} or action.payload
            state.isLoading = action.payload; // todo
        },
        addUser: (state, action: PayloadAction<User>) => { // todo
            state.dataUser = {...state.dataUser, ...action.payload};  //TODO
            state.loggedIn = true;
        },

        setLoggedIn: (state, action: PayloadAction<boolean>) => { // todo
            state.loggedIn = action.payload;
        },
    },
});

export const {setLoading, addUser, setLoggedIn} = userSlice.actions;
export default userSlice.reducer;
