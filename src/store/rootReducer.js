import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer/postsReducer";

export const rootReducer = combineReducers({ postsReducer })

