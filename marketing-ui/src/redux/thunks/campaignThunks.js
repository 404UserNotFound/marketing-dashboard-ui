import {deleteRequest, getRequest, postRequest, updateRequest} from "../../common/util/Fetch.js";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {CAMPAIGN_CHANNEL_MAPPINGS_URL} from "../../common/util/constants.js";

export const fetchCampaigns = createAsyncThunk("Campaign/fetchCampaigns", async () => {
    return await getRequest(CAMPAIGN_CHANNEL_MAPPINGS_URL);
});

export const deleteCampaign = createAsyncThunk("Campaign/deleteCampaign", async (campaignChannelId) => {
    return await deleteRequest(campaignChannelId, CAMPAIGN_CHANNEL_MAPPINGS_URL);
});

export const updateCampaign = createAsyncThunk("Campaign/updateCampaign", async (campaign) => {
    return updateRequest(CAMPAIGN_CHANNEL_MAPPINGS_URL, campaign.campaignId, campaign);
});

export const createCampaign = createAsyncThunk("Campaign/createCampaign", async (campaign) => {
    return await postRequest(CAMPAIGN_CHANNEL_MAPPINGS_URL, campaign);
});