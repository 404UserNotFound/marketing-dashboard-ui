import { describe, it } from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";import MarketingCampaignsListItem from "./MarketingCampaignsListItem.jsx";
import {Provider} from "react-redux";
import {
    createTestStore,
    mockCampaign,
} from "../../../test/testData.js";

describe("MarketingCampaignsListItem", () => {
    it("renders items correctly", () => {
        const refreshListMock = vi.fn();
        const store = createTestStore({})

        render(
            <Provider store={store}>
                <MarketingCampaignsListItem
                    campaignItem={mockCampaign}
                    refreshList={refreshListMock}
                />
            </Provider>
        );
        expect(screen.getByText("Oblivion Anniversary")).toBeInTheDocument();
        expect(screen.getByText("20th Year Anniversary Remake")).toBeInTheDocument();
        expect(screen.getByText("Active")).toBeInTheDocument();
        expect(screen.getByText("2025-01-01")).toBeInTheDocument();
        expect(screen.getByText("TV")).toBeInTheDocument();

    });

    it("opens update modal when edit button is clicked", () => {
        const refreshListMock = vi.fn();
        const store = createTestStore({})

        render(
            <Provider store={store}>
                <MarketingCampaignsListItem
                    campaignItem={mockCampaign}
                    refreshList={refreshListMock}
                />
            </Provider>
        );

        const editButton = screen.getByTestId("EditIcon");
        fireEvent.click(editButton);
        expect(screen.getByText("Update Campaign")).toBeInTheDocument();
    });

    it("opens delete modal when edit button is clicked", () => {
        const refreshListMock = vi.fn();
        const store = createTestStore({})

        render(
            <Provider store={store}>
                <MarketingCampaignsListItem
                    campaignItem={mockCampaign}
                    refreshList={refreshListMock}
                />
            </Provider>
        );

        const deleteIcon = screen.getByTestId("DeleteIcon");
        fireEvent.click(deleteIcon);
        expect(screen.getByText("Are you sure you wish to delete the \"Oblivion Anniversary\" entry?")).toBeInTheDocument();
    });
});