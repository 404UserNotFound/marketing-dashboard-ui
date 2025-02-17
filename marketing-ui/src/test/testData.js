import {configureStore} from "@reduxjs/toolkit";
import channelReducer from "../redux/reducers/channelReducer.js";
import campaignReducer from "../redux/reducers/campaignReducer.js";

export const mockChannelResponse = [
    {"channelId": 1, "name": "Magazine"}, {
    "channelId": 2, "name": "Search Engine"},
    {"channelId": 3, "name": "Social Media"},
    {"channelId": 4, "name": "TV"}
];

export const mockCampaignResponseArray = [{
    "campaignChannelId": 1,
    "campaignId": 1,
    "channelId": [1],
    "channelNames": ["TV"],
    "campaignName": "Oblivion Anniversary",
    "campaignDescription": "20th Year Anniversary Remake",
    "campaignBudget": 20000.0,
    "campaignStatus": "Active",
    "campaignStartDate": "2025-01-01",
    "campaignEndDate": "2026-01-01"
}, {
    "campaignChannelId": 54,
    "campaignId": 2,
    "channelId": [1],
    "channelNames": ["TV"],
    "campaignName": "Skyrim HD Remaster",
    "campaignDescription": "15th Anniversary Remaster",
    "campaignBudget": 30000.0,
    "campaignStatus": "Cancelled",
    "campaignStartDate": "2025-01-01",
    "campaignEndDate": "2027-01-01"
}];

export const mockCampaign = {
    "campaignChannelId": 1,
    "campaignId": 1,
    "channelId": [1],
    "channelNames": ["TV"],
    "campaignName": "Oblivion Anniversary",
    "campaignDescription": "20th Year Anniversary Remake",
    "campaignBudget": 20000.0,
    "campaignStatus": "Active",
    "campaignStartDate": "2025-01-01",
    "campaignEndDate": "2026-01-01"
};

export const singleChannelResponse = {"channelId": 1, "name": "Magazine"};

export const emptyMockStore = configureStore({
    reducer: {
        channel: channelReducer,
        campaign: campaignReducer
    },
    preloadedState: {
        channelList: [],
        channelRequestStatus: "",
        channelError: null,
        campaignList: [],
        campaignRequestStatus: "",
        campaignError: null
    },
});

export const mockStoreWithCampaignsAndChannels = configureStore({
    reducer: {
        campaign: campaignReducer,
        channel: channelReducer},
    preloadedState: {
        campaignList: mockCampaignResponseArray, campaignRequestStatus: "succeeded", campaignError: null,
        channelList: mockChannelResponse, channelRequestStatus: "succeeded", channelError: null
    },
});
