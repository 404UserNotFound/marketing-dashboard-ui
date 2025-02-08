import {createSlice} from "@reduxjs/toolkit";
import {createCampaign, deleteCampaign, fetchCampaigns, updateCampaign} from "../thunks/campaignThunks.js";

const campaignReducer = createSlice({
    name: "campaign",
    initialState: {
        campaignList: [],
        campaignRequestStatus: "",
        campaignError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //Get
            .addCase(fetchCampaigns.pending, (state) => {
                state.campaignRequestStatus = "loading";
            })
            .addCase(fetchCampaigns.fulfilled, (state, action) => {
                state.campaignRequestStatus = "succeeded";
                state.campaignList = action.payload;
            })
            .addCase(fetchCampaigns.rejected, (state, action) => {
                state.campaignRequestStatus = "failed";
                state.campaignError = action.error.message;
            })

            //Delete
            .addCase(deleteCampaign.fulfilled, (state) => {
                state.campaignRequestStatus= "succeeded"
            })
            .addCase(deleteCampaign.pending, (state) => {
                state.campaignRequestStatus= "loading"
            })
            .addCase(deleteCampaign.rejected, (state, action) => {
                state.campaignRequestStatus= "failed"
                state.campaignError = action.error.message;
            })


            //Update
            .addCase(updateCampaign.fulfilled, (state) => {
                state.campaignRequestStatus= "succeeded"
            })
            .addCase(updateCampaign.pending, (state) => {
                state.campaignRequestStatus= "loading"
            })
            .addCase(updateCampaign.rejected, (state, action) => {
                state.campaignRequestStatus= "failed"
                state.campaignError = action.error.message;
            })

            //Create
            .addCase(createCampaign.fulfilled, (state) => {
                state.campaignRequestStatus= "succeeded"
            })
            .addCase(createCampaign.pending, (state) => {
                state.campaignRequestStatus= "loading"
            })
            .addCase(createCampaign.rejected, (state, action) => {
                state.campaignRequestStatus= "failed"
                state.campaignError = action.error.message;
            })

    },
});
export default campaignReducer.reducer;

