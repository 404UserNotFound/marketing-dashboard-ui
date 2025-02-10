import {useState} from "react";
import {Modal, Typography} from "@mui/material";
import MarketingCampaignsCreateUpdateModalForm
    from "../marketing_campaigns_create_update_modal_form/MarketingCampaignsCreateUpdateModalForm.jsx";
import {useDispatch} from "react-redux";
import {createCampaign} from "../../../../redux/thunks/campaignThunks.js";
import "./MarketingCampaignsCreateModal.scss"

export default function MarketingCampaignsCreateModal(props) {
    const {
        closeModal,
        open,
        refreshList
    } = props;

    const initialCampaign = {
        "campaignName": "",
        "campaignDescription": "",
        "campaignBudget": 0,
        "campaignStatus": "",
        "campaignStartDate": "",
        "campaignEndDate": "",
        "channelId": []
    };
    const [newCampaign, setNewCampaign] = useState(initialCampaign);
    const dispatch = useDispatch();

    async function createNewCampaign(newCampaign) {
        await dispatch(createCampaign(newCampaign))
        refreshList()
    }

    return (
        <Modal
            className="create-campaigns-modal-background"
            open={open}
            onClose={closeModal}
        >
            <div
                className="create-campaigns-modal-container"
            >
            <Typography variant="h6">Create Campaign</Typography>
            <MarketingCampaignsCreateUpdateModalForm
                handleConfirm={()=>createNewCampaign(newCampaign).then(closeModal)}
                handleCancelClick={closeModal}
                setCampaignToSubmit={setNewCampaign}
                campaignToSubmit={newCampaign}
            />
            </div>
        </Modal>
    )
}