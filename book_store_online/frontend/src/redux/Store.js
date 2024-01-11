import {thunk} from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers/RootReducer";

const init={};
const middleware=[thunk];
const store=createStore(rootReducer,init,applyMiddleware(...middleware));

export default store;