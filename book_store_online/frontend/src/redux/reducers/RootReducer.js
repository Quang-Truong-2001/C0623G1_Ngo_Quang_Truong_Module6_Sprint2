import {combineReducers} from "redux";
import {authReducer} from "./AuthReducers";
import cart from "../../components/pages/Cart";
import {cartReducer} from "./CartReducers";
import {userReducer} from "./UserReducers";

export const rootReducer=combineReducers({
    users: authReducer,
    carts: cartReducer,
    infos: userReducer
})