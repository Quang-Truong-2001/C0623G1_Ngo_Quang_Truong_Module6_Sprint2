import axios from "axios";

export const getAllCategory=async ()=>{
    try {
        let res=await axios.get("http://localhost:8080/api/category");
        return res.data;
    } catch (e){
        return undefined;
    }
}