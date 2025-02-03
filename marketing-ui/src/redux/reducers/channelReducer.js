import {createSlice} from "@reduxjs/toolkit";
import {createChannel, deleteChannel, fetchChannels, updateChannel} from "../thunks/channelThunks.js";

const channelReducer = createSlice({
    name: "channel",
    initialState: {
        channelList: [],
        status: "",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //Get
            .addCase(fetchChannels.pending, (state) => {
                state.requestStatus = "loading";
            })
            .addCase(fetchChannels.fulfilled, (state, action) => {
                state.requestStatus = "succeeded";
                state.channelList = action.payload;
            })
            .addCase(fetchChannels.rejected, (state, action) => {
                state.requestStatus = "failed";
                state.error = action.error.message;
            })

            //Delete
            .addCase(deleteChannel.fulfilled, (state) => {
                state.requestStatus= "succeeded"
            })
            .addCase(deleteChannel.pending, (state) => {
                state.requestStatus= "loading"
            })
            .addCase(deleteChannel.rejected, (state, action) => {
                state.requestStatus= "failed"
                state.error = action.error.message;
            })


            //Update
            .addCase(updateChannel.fulfilled, (state) => {
                state.requestStatus= "succeeded"
            })
            .addCase(updateChannel.pending, (state) => {
                state.requestStatus= "loading"
            })
            .addCase(updateChannel.rejected, (state, action) => {
                state.requestStatus= "failed"
                state.error = action.error.message;
            })

            //Create
            .addCase(createChannel.fulfilled, (state) => {
                state.requestStatus= "succeeded"
            })
            .addCase(createChannel.pending, (state) => {
                state.requestStatus= "loading"
            })
            .addCase(createChannel.rejected, (state, action) => {
                state.requestStatus= "failed"
                state.error = action.error.message;
            })

    },
});
export default channelReducer.reducer;

