import { combineReducers } from "redux";
import appReducer1 from "./reducer1";
import appReducer2 from "./reducer2";

const reducer = combineReducers({ appReducer1, appReducer2 });

export default reducer;
