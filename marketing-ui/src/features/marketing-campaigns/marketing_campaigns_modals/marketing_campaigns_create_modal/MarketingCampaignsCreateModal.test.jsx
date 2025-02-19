import { describe, it } from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import MarketingCampaignsCreateModal from "./MarketingCampaignsCreateModal.jsx";
import {createTestStore} from "../../../../test/testData.js";


describe("MarketingCampaignsCreateModal", () => {
    it("checks modal contents are visible and closeModal is called on cancel", () => {
        const handleCloseMock = vi.fn();
        const refreshListMock = vi.fn();
        const store = createTestStore();

        render(
            <Provider store={store}>
                <MarketingCampaignsCreateModal
                    closeModal={handleCloseMock}
                    open={true}
                    refreshList={refreshListMock}
                />
            </Provider>)

        const modalTitle = screen.getByText("Create Campaign");
        const nameFieldLabel = screen.getByText("Name");
        const statusFieldLabel = screen.getByText("Campaign Status");
        const cancelButton = screen.getByRole("button", {name: "Cancel"});
        expect(modalTitle).toBeVisible();
        expect(nameFieldLabel).toBeVisible();
        expect(statusFieldLabel).toBeVisible();

        fireEvent.click(cancelButton);
        expect(handleCloseMock).toHaveBeenCalledTimes(1);
    });
});