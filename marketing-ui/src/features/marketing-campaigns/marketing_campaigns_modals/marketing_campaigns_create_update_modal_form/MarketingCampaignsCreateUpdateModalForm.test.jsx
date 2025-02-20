import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import MarketingCampaignsCreateUpdateModalForm from "./MarketingCampaignsCreateUpdateModalForm";
import {getRequest} from "../../../../common/util/Fetch";
import {vi} from "vitest";
import * as FetchModule from "../../../../common/util/Fetch";
import {mockChannelResponse} from "../../../../test/testData.js";
import {act} from "react";

vi.spyOn(FetchModule, "getRequest").mockImplementation(() => Promise.resolve([]));

describe("MarketingCampaignsCreateUpdateModalForm", () => {
    const mockHandleConfirm = vi.fn();
    const mockHandleCancelClick = vi.fn();
    const mockSetCampaignToSubmit = vi.fn();

    const mockedProps = {
        handleConfirm: mockHandleConfirm,
        handleCancelClick: mockHandleCancelClick,
        setCampaignToSubmit: mockSetCampaignToSubmit,
        campaignToSubmit: {
            campaignName: "",
            channelId: [],
            campaignDescription: "",
            campaignBudget: "",
            campaignStatus: "",
            campaignStartDate: "",
            campaignEndDate: ""
        }
    };

    it("calls handleConfirm when Confirm button is clicked", async () => {
        FetchModule.getRequest.mockResolvedValueOnce(mockChannelResponse);
        render(<MarketingCampaignsCreateUpdateModalForm {...mockedProps} />);
        await act(async () => {
            fireEvent.click(screen.getByText(/confirm/i));
        });
        await waitFor(() => {
            expect(mockHandleConfirm).toHaveBeenCalledWith(mockedProps.campaignToSubmit)
        });

    });

    it("calls handleCancelClick when Cancel button is clicked", async () => {
        FetchModule.getRequest.mockResolvedValueOnce(mockChannelResponse);
        render(<MarketingCampaignsCreateUpdateModalForm {...mockedProps} />);
        await act(async () => {

            fireEvent.click(screen.getByText(/cancel/i));
        });
        await waitFor(() => {
            expect(mockHandleCancelClick).toHaveBeenCalled();
        });

    });

    it("updates the campaign name on input change", async () => {
        FetchModule.getRequest.mockResolvedValueOnce(mockChannelResponse);
        render(<MarketingCampaignsCreateUpdateModalForm {...mockedProps} />);
        const nameInput = screen.getByLabelText(/name/i);
        await act(async () => {

            fireEvent.change(nameInput, {target: {value: "New Campaign"}});
        });
        await waitFor(() => {
            expect(mockSetCampaignToSubmit).toHaveBeenCalledWith(expect.any(Function));
        });

    });

});
