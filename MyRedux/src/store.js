import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import counter from "./reducer";

const middleware = [thunk]


const store = createStore(
    counter,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store