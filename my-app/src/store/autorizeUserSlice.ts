import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState: Boolean = false


const autorizeUser = createSlice({
    name: 'autorizeUser',
    initialState,
    reducers: {
        addAutorizeUser(state, action: PayloadAction<boolean>) {

            state = action.payload

        },

    },
});


export const { addAutorizeUser } = autorizeUser.actions;

export default autorizeUser.reducer;