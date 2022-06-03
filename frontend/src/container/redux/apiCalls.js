import { loginStart, loginSuccess, loginFailed } from "./userReduxSlice";
import { axiosInstance } from "../../prodConfig";
//import { axiosInstance } from "../../devConfig";

import axios from "axios";


export const login = async (dispatch, user) => {
    dispatch(loginStart())

   // let url = "http://localhost:4000/api/auth/login"

    try { 
        const apiRes = await axiosInstance.post("/auth/login", user)
        dispatch(loginSuccess(apiRes))


    }catch(err) {
        dispatch(loginFailed(err))

    }

}


export const demoLogin = async (dispatch, user) => {
    dispatch(loginStart())

    //let url = "http://localhost:4000/api/auth/register"

    try { 
        const apiRes = await axiosInstance.post("/auth/register", user)
        dispatch(loginSuccess(apiRes))


    }catch(err) {
        dispatch(loginFailed(err))

    }

}