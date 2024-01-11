import async from "async";
import * as authService from "../../services/AuthService"
import {GET_USER_INFO} from "../constant";

export const getInfo=()=>async (dispatch)=>{
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        let res=await authService.getInfo(user.id);
        dispatch({
            type: GET_USER_INFO,
            payload: res
        })
    } catch (e){
        console.log(e);
    }
}