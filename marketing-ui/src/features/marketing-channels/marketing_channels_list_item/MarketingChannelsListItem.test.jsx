import { describe, it } from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import MarketingChannelsListItem from "./MarketingChannelsListItem.jsx";
import {
    createTestStore,
    singleChannelResponse
} from "../../../test/testData.js";

describe("MarketingChannelsListItem", () => {
    it("renders channel details correctly", () => {
        const refreshChannelListMock = vi.fn();
        const store = createTestStore({})

        render(
            <Provider store={store}>
                <MarketingChannelsListItem
                    channels={singleChannelResponse}
                    refreshChannelList={refreshChannelListMock}
                />
            </Provider>
        );

        expect(screen.getByText("Magazine")).toBeInTheDocument();
    });

    it("opens update modal when edit button is clicked", () => {
        const refreshChannelListMock = vi.fn();
        const store = createTestStore({})

        render(
            <Provider store={store}>
                <MarketingChannelsListItem
                    channels={singleChannelResponse}
                    refreshChannelList={refreshChannelListMock}
                />
            </Provider>
        );
        const editButton = screen.getByTestId("EditIcon");
        fireEvent.click(editButton);
        expect(screen.getByText("Update Channel")).toBeInTheDocument();
    });

    it("opens delete modal when delete button is clicked", () => {
        const refreshChannelListMock = vi.fn();
        const store = createTestStore({})

        render(
            <Provider store={store}>
                <MarketingChannelsListItem
                    channels={singleChannelResponse}
                    refreshChannelList={refreshChannelListMock}
                />
            </Provider>
        );

        const deleteButton = screen.getByTestId("DeleteIcon");
        fireEvent.click(deleteButton);
        expect(screen.getByText("Are you sure you wish to delete the \"Magazine\" entry?"));
    });
});