import {useState} from "react";
import {Modal, Typography} from "@mui/material";
import MarketingCampaignsCreateUpdateModalForm
    from "../marketing_campaigns_create_update_modal_form/MarketingCampaignsCreateUpdateModalForm.jsx";
import {useDispatch} from "react-redux";
import {createCampaign} from "../../../../redux/thunks/campaignThunks.js";

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
            open={open}
            onClose={closeModal}
        >
            <div>
            <Typography>Create Campaign</Typography>
            <MarketingCampaignsCreateUpdateModalForm
                handleConfirm={()=>createNewCampaign(newCampaign).then(()=>closeModal)}
                handleCancelClick={closeModal}
                setCampaignToSubmit={setNewCampaign}
                campaignToSubmit={newCampaign}
            />
            </div>
        </Modal>
    )
}