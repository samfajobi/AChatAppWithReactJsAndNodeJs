import { createSlice } from '@reduxjs/toolkit'


const authSlice = createSlice({
    name: "auht",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },

    reducers: {
        loginStart: ( state) => {
            state.isFetching = true

        },
        loginSuccess: ( state, action ) => {
            state.currentUser = action.payload

        },
        loginFailed: (state, action) => {
            state.isFetching = false,
            state.error = true

        }
    }
})

export const { loginStart, loginSuccess, loginFailed} = authSlice.actions;
export default authSlice.reducer;