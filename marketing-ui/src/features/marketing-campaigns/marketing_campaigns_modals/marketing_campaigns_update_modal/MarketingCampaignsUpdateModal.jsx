import {Modal, Typography} from "@mui/material";

import MarketingCampaignsCreateUpdateModalForm
    from "../marketing_campaigns_create_update_modal_form/MarketingCampaignsCreateUpdateModalForm.jsx";
import {useState} from "react";
import {updateCampaign} from "../../../../redux/thunks/campaignThunks.js";
import {useDispatch} from "react-redux";
import "./MarketingCampaignsUpdateModal.scss";

export default function MarketingCampaignsUpdateModal(props) {
    const {
        closeModal,
        open,
        campaign,
        refreshCampaigns
    } = props;

    const [campaignToUpdate, setCampaignToUpdate] = useState(campaign);
    const dispatch = useDispatch();

    async function updateExistingCampaign(campaignToUpdate) {
        await dispatch(updateCampaign(campaignToUpdate))
        refreshCampaigns()
    }


    return (
        <Modal
            className="update-campaigns-modal-background"
            open={open}
            onClose={closeModal}
        >
            <div className="update-campaigns-modal-container">
                <Typography variant="h6">Update Campaign</Typography>
                <MarketingCampaignsCreateUpdateModalForm
                    handleConfirm={() => updateExistingCampaign(campaignToUpdate).then(
                        closeModal()
                    )}
                    handleCancelClick={closeModal}
                    setCampaignToSubmit={setCampaignToUpdate}
                    campaignToSubmit={campaignToUpdate}
                />
            </div>
        </Modal>
    )
}