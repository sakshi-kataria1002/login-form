import { combineReducers } from "redux";
import inputReducer from "./input/input.reducer";

export const rootReducer = combineReducers({
    input: inputReducer
})