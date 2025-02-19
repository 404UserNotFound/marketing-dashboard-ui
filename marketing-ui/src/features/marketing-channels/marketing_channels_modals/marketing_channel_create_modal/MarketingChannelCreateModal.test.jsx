import { describe, it } from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";
import MarketingChannelCreateModal from "./MarketingChannelCreateModal.jsx";
import {Provider} from "react-redux";
import {createTestStore} from "../../../../test/testData.js";


describe("MarketingChannelCreateModal", () => {
    it("checks modal elements are visible and that cancel button calls closeModal", () => {
        const handleCloseMock = vi.fn();
        const refreshListMock = vi.fn();
        const store = createTestStore({})

        render(
            <Provider store={store}>
                <MarketingChannelCreateModal
                    open={true}
                    closeModal={handleCloseMock}
                    refreshChannelList={refreshListMock}
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

    it("refreshes list of channels and dismisses modal when confirm button is clicked", async () => {
        const handleCloseMock = vi.fn();
        const refreshListMock = vi.fn();
        const store = createTestStore({})
        const dispatchSpy = vi.spyOn(store, 'dispatch').mockImplementation(() => {
        });

        render(
            <Provider store={store}>
                <MarketingChannelCreateModal
                    open={true}
                    closeModal={handleCloseMock}
                    refreshChannelList={refreshListMock}
                />
            </Provider>)

        const nameField = screen.getByTestId("channel-name-input").querySelector('input')
        fireEvent.change(nameField, {target: {value: 'New Test Channel'}})

        const confirmButton = screen.getByRole("button", {name: "Confirm"});
        fireEvent.click(confirmButton);
        await new Promise((resolve) => setTimeout(resolve, 0));

        expect(dispatchSpy).toHaveBeenCalled();
        expect(refreshListMock).toHaveBeenCalledTimes(1);
        expect(handleCloseMock).toHaveBeenCalledTimes(1);
    });
});