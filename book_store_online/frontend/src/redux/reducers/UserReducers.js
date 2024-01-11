import {GET_USER_INFO} from "../constant";

export const userReducer=(user={},action)=>{
    const {type,payload}=action;
    switch (type){
        case GET_USER_INFO:
            return payload;
        default:
            return user;
    }
}