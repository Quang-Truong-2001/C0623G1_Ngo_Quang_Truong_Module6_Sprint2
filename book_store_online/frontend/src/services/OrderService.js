import axios from "axios";

export const saveOrder=async (order)=>{
    try {
        await axios.post("http://localhost:8080/api/order/create",order);
        return true;
    } catch (e){
        return false;
    }
}