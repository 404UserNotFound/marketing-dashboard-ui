import {configureStore} from "@reduxjs/toolkit";
import channelReducer from "../redux/reducers/channelReducer.js";

export const mockChannelResponse = [
    {"channelId": 1, "name": "Magazine"},
    {"channelId": 2, "name": "Search Engine"},
    {"channelId": 3, "name": "Social Media"},
    {"channelId": 4, "name": "TV"}
];

export const singleChannelResponse =
    {"channelId": 1, "name": "Magazine"};

export const emptyChannelStore = configureStore({
    reducer: { channels: channelReducer },
    preloadedState: { channelList: [], status: "", error: null},
});
