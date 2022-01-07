import { configureStore } from "@reduxjs/toolkit";
import parkingDataReducer from "./parkingReducer";

export default configureStore({
    reducer: {
        addReducer: parkingDataReducer,
    },
});
