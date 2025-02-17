import { describe, it, expect } from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";
import MarketingChannelUpdateModal from "./MarketingChannelUpdateModal.jsx";
import {emptyMockStore, singleChannelResponse} from "../../../../test/testData.js";
import {Provider} from "react-redux";


describe("MarketingChannelUpdateModal", () => {
    it("checks modal elements are visible and that cancel button calls closeModal", () => {
        const handleCloseMock = vi.fn();
        const refreshListMock = vi.fn();

        render(
            <Provider store={emptyMockStore}>
                <MarketingChannelUpdateModal
                open={true}
                closeModal={handleCloseMock()}
                channels={singleChannelResponse}
                refreshChannelList={refreshListMock()}
                />
            </Provider>)

        const modalTitle = screen.getByText("Update Channel");
        const channelName = screen.getByPlaceholderText("Magazine");
        const cancelButton = screen.getByRole("button", {name: "Cancel"});

        expect(modalTitle).toBeVisible();
        expect(channelName).toBeVisible();

        fireEvent.click(cancelButton);
        expect(handleCloseMock).toHaveBeenCalledTimes(1);
    });

    it("refreshes list of channels and dismisses modal when confirm button is clicked", () => {
        const handleCloseMock = vi.fn();
        const refreshListMock = vi.fn();

        render(
            <Provider store={emptyMockStore}>
                <MarketingChannelUpdateModal
                    open={true}
                    closeModal={handleCloseMock()}
                    channels={singleChannelResponse}
                    refreshChannelList={refreshListMock()}
                />
            </Provider>)

        const confirmButton = screen.getByRole("button", {name: "Confirm"});

        fireEvent.click(confirmButton);
        expect(refreshListMock).toHaveBeenCalledTimes(1);
        expect(handleCloseMock).toHaveBeenCalledTimes(1);
    });
});