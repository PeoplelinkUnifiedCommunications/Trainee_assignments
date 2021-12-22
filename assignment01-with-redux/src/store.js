import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./reducer";

const store = configureStore({
    reducer: {
        addReducer: userDataReducer,
    },
});

export default store;
