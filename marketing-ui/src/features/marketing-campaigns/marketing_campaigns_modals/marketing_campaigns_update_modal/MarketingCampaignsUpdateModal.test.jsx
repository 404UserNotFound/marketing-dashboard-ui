import { describe, it } from "vitest";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {Provider} from "react-redux";
import {mockCampaign} from "../../../../test/testData.js";
import MarketingCampaignsUpdateModal from "./MarketingCampaignsUpdateModal.jsx";
import {configureStore} from "@reduxjs/toolkit";
import campaignReducer from "../../../../redux/reducers/campaignReducer.js";
import channelReducer from "../../../../redux/reducers/channelReducer.js";


describe("MarketingCampaignsUpdateModal", () => {
    it("checks that campaign details are visible and closeModal is called on cancel", async () => {
        const handleCloseMock = vi.fn();
        const refreshListMock = vi.fn();
        const store = configureStore({
            reducer: {
                campaign: campaignReducer,
                channel: channelReducer
            },

        });

        render(
            <Provider store={store}>
                <MarketingCampaignsUpdateModal
                    closeModal={handleCloseMock}
                    open={true}
                    refreshCampaigns={refreshListMock}
                    campaign={mockCampaign}
                />
            </Provider>)

        const modalTitle = await waitFor(() => screen.getByText("Update Campaign"));
        const nameFieldLabel = screen.getByDisplayValue("Oblivion Anniversary");
        const statusFieldLabel = screen.getByText("Active");
        const dateFieldLabel = screen.getByDisplayValue("2025-01-01");
        const cancelButton = screen.getByRole("button", {name: "Cancel"});
        expect(modalTitle).toBeVisible();
        expect(nameFieldLabel).toBeVisible();
        expect(statusFieldLabel).toBeVisible();
        expect(dateFieldLabel).toBeVisible();

        fireEvent.click(cancelButton);
        expect(handleCloseMock).toHaveBeenCalledTimes(1);
    });
});