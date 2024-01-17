import axios from "axios";
import authHeader from "./AuthService";

export const payment = async (price) => {
    try {
        let res =await axios.get(`http://localhost:8080/api/payment?price=${price}`,{ headers: authHeader() });
        return res.data;
    } catch (e) {
        return undefined;
    }
}