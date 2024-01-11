
import axios from "axios";

export const getAllBook=async ()=>{
    try {
        let res=await axios.get("http://localhost:8080/api/book");
        return res;
    } catch (e){
        return undefined;
    }
}
export const getAllBookBySearch=async (name)=>{
    try {
        let res=await axios.get(`http://localhost:8080/api/book?name=${name}`);
        return res;
    } catch (e){
        return undefined;
    }
}
export const getBookById=async (id)=>{
    try {
        let res=await axios.get(`http://localhost:8080/api/book/${id}`);
        return res.data;
    } catch (e){
        return undefined;
    }
}