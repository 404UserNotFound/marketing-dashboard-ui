import {createAsyncThunk} from "@reduxjs/toolkit";
import {CHANNELS_URL} from "../../common/util/constants.js";
import {deleteRequest, getRequest, postRequest, updateRequest} from "../../common/util/Fetch.js";


export const fetchChannels = createAsyncThunk("channel/fetchChannels", async () => {
    return await getRequest(CHANNELS_URL);
});

export const updateChannel = createAsyncThunk("channel/updateChannel", async (channel) => {
    return updateRequest(CHANNELS_URL, channel.channelId, channel);
});

export const createChannel = createAsyncThunk("channel/createChannel", async (channel) => {
    return await postRequest(CHANNELS_URL, channel);
});

export const deleteChannel = createAsyncThunk("channel/deleteChannel", async (channelId) => {
    return await deleteRequest(channelId, CHANNELS_URL);
});
