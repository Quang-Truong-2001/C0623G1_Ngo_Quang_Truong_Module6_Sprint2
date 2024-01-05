import axios from "axios";

export const login =async (account)=>{
    try {
        let res = await axios.post("http://localhost:8080/api/auth/login",account);
        return res;
    } catch (e){
        return undefined;
    }
}