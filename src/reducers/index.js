import { combineReducers } from "redux";
import PostReducer from './post'
import UserReducer from "./user";

export default combineReducers({
    // disini reducers
    PostReducer,
    UserReducer
})