import {thunk} from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {authReducer} from "./reducers/AuthReducers";

const init={};
const middleware=[thunk];
const store=createStore(authReducer,init,applyMiddleware(...middleware));

export default store;