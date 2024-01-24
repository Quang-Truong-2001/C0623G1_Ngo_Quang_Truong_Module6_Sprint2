import axios from "axios";
import authHeader from "./AuthService";

export const saveOrder=async (order)=>{
    try {
        await axios.post("http://localhost:8080/api/order/create",order,{ headers: authHeader() });
        return true;
    } catch (e){
        return false;
    }
}
export const checkOrder=async (order)=>{
    try {
        let res=await axios.post("http://localhost:8080/api/order/check",order,{ headers: authHeader() });
        return res;
    } catch (e){
        return false;
    }
}
export const getAllOrder=async (id)=>{
    try {
        let res=await axios.get(`http://localhost:8080/api/order/list?id=${id}`,{ headers: authHeader() });
        return res;
    } catch (e){
        return undefined;
    }
}
export const getAllDetailOrder=async (id)=>{
    try {
        let res=await axios.get(`http://localhost:8080/api/order/list/detail?id=${id}`,{ headers: authHeader() });
        return res;
    } catch (e){
        return undefined;
    }
}
