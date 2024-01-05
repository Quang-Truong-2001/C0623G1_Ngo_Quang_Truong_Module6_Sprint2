import async from "async";
import * as authService from "../../services/AuthService"
import {GET_USER_LOGIN} from "../constant";

export const loginUser=(account)=>async (dispatch)=>{
    try {
        let res=await authService.login(account);
        localStorage.setItem('user',JSON.stringify(res.data));
        dispatch({
            type: GET_USER_LOGIN,
            payload: res.data,
        });
    } catch (e){
        throw e
    }
};