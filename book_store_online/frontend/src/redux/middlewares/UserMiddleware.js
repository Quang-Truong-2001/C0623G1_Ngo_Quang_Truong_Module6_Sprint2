import async from "async";
import * as authService from "../../services/AuthService"
import {GET_USER_INFO} from "../constant";


export const getInformation=()=>async (dispatch)=>{
    const user = JSON.parse(localStorage.getItem('user'));
    try {
        let res=await authService.getInfo(user.id);
        dispatch({
            type: GET_USER_INFO,
            payload: res
        })
    } catch (e){
        console.log(e);
    }
}