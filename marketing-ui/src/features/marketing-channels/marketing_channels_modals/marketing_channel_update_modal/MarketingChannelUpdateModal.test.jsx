import { describe, it } from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";
import MarketingChannelUpdateModal from "./MarketingChannelUpdateModal.jsx";
import {
    createTestStore,
    singleChannelResponse
} from "../../../../test/testData.js";
import {Provider} from "react-redux";


describe("MarketingChannelUpdateModal", () => {
    it("checks modal elements are visible and that cancel button calls closeModal", () => {
        const handleCloseMock = vi.fn();
        const refreshListMock = vi.fn();
        const store = createTestStore({})

        render(
            <Provider store={store}>
                <MarketingChannelUpdateModal
                open={true}
                closeModal={handleCloseMock}
                channels={singleChannelResponse}
                refreshChannelList={refreshListMock}
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

});