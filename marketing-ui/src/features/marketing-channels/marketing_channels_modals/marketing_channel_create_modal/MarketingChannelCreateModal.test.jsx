import { describe, it, expect } from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";
import MarketingChannelCreateModal from "./MarketingChannelCreateModal.jsx";
import {Provider} from "react-redux";
import {emptyMockStore} from "../../../../test/testData.js";


describe("MarketingChannelCreateModal", () => {
    it("checks modal elements are visible and that cancel button calls closeModal", () => {
        const handleCloseMock = vi.fn();
        const refreshListMock = vi.fn();

        render(
            <Provider store={emptyMockStore}>
                <MarketingChannelCreateModal
                    open={true}
                    closeModal={handleCloseMock()}
                    refreshChannelList={refreshListMock()}
                />
            </Provider>)

        const modalTitle = screen.getByText("Create New Channel");
        const nameFieldLabel = screen.getByText("Name");
        const cancelButton = screen.getByRole("button", {name: "Cancel"});
        expect(modalTitle).toBeVisible();
        expect(nameFieldLabel).toBeVisible();

        fireEvent.click(cancelButton);
        expect(handleCloseMock).toHaveBeenCalledTimes(1);
    });

    it("refreshes list of channels and dismisses modal when confirm button is clicked", () => {
        const handleCloseMock = vi.fn();
        const refreshListMock = vi.fn();

        render(
            <Provider store={emptyMockStore}>
                <MarketingChannelCreateModal
                    open={true}
                    closeModal={handleCloseMock()}
                    refreshChannelList={refreshListMock()}
                />
            </Provider>)

        const confirmButton = screen.getByRole("button", {name: "Confirm"});

        fireEvent.click(confirmButton);
        expect(refreshListMock).toHaveBeenCalledTimes(1);
        expect(handleCloseMock).toHaveBeenCalledTimes(1);
    });
});