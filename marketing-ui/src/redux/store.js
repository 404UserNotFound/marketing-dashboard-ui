import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "./reducers/channelReducer.js";
import {thunk} from "redux-thunk";
import campaignReducer from "./reducers/campaignReducer.js";

const store = configureStore({
    reducer: {
        channel: channelReducer,
        campaign: campaignReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;