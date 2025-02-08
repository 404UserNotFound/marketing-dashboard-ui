import {createSlice} from "@reduxjs/toolkit";
import {createChannel, deleteChannel, fetchChannels, updateChannel} from "../thunks/channelThunks.js";

const channelReducer = createSlice({
    name: "channel",
    initialState: {
        channelList: [],
        channelRequestStatus: "",
        channelError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //Get
            .addCase(fetchChannels.pending, (state) => {
                state.channelRequestStatus = "loading";
            })
            .addCase(fetchChannels.fulfilled, (state, action) => {
                state.channelRequestStatus = "succeeded";
                state.channelList = action.payload;
            })
            .addCase(fetchChannels.rejected, (state, action) => {
                state.channelRequestStatus = "failed";
                state.channelError = action.error.message;
            })

            //Delete
            .addCase(deleteChannel.fulfilled, (state) => {
                state.channelRequestStatus= "succeeded"
            })
            .addCase(deleteChannel.pending, (state) => {
                state.channelRequestStatus= "loading"
            })
            .addCase(deleteChannel.rejected, (state, action) => {
                state.channelRequestStatus= "failed"
                state.channelError = action.error.message;
            })


            //Update
            .addCase(updateChannel.fulfilled, (state) => {
                state.channelRequestStatus= "succeeded"
            })
            .addCase(updateChannel.pending, (state) => {
                state.channelRequestStatus= "loading"
            })
            .addCase(updateChannel.rejected, (state, action) => {
                state.channelRequestStatus= "failed"
                state.channelError = action.error.message;
            })

            //Create
            .addCase(createChannel.fulfilled, (state) => {
                state.channelRequestStatus= "succeeded"
            })
            .addCase(createChannel.pending, (state) => {
                state.channelRequestStatus= "loading"
            })
            .addCase(createChannel.rejected, (state, action) => {
                state.channelRequestStatus= "failed"
                state.channelError = action.error.message;
            })

    },
});
export default channelReducer.reducer;

