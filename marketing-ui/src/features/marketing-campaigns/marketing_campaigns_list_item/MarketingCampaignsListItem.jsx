import {Card, Typography} from "@mui/material";
import IconButton from "../../../common/components/coloured-icon-button/ColouredIconButton.jsx";
import {useState} from "react";
import DeleteModal from "../../../common/components/delete-modal/DeleteModal.jsx";
import MarketingCampaignsUpdateModal
    from "../marketing_campaigns_modals/marketing_campaigns_update_modal/MarketingCampaignsUpdateModal.jsx";
import {useDispatch} from "react-redux";
import {deleteCampaign} from "../../../redux/thunks/campaignThunks.js";

export default function MarketingCampaignsListItem(props) {
    const {
        campaignItem,
        refreshList,
    } = props;
    const {
        campaignChannelId,
        channelNames,
        channelIds,
        campaignId,
        campaignName,
        campaignDescription,
        campaignBudget,
        campaignStatus,
        campaignStartDate,
        campaignEndDate
    } = campaignItem;

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const dispatch = useDispatch();

    async function confirmDelete(campaignChannelId) {
        await dispatch(deleteCampaign(campaignChannelId))
        refreshList()
    }

    return (<>
        <Card>
            <Typography>{campaignName}</Typography>
            <Typography>{campaignDescription}</Typography>
            {channelNames.map((channelName)=> <Typography key={channelName}>{channelName}</Typography>)}
            <Typography>{campaignStatus}</Typography>
            <Typography>{campaignBudget}</Typography>
            <Typography>{campaignStartDate}</Typography>
            <Typography>{campaignEndDate}</Typography>
            <IconButton
                style={"edit"}
                onClick={() => {
                    setOpenUpdateModal(true)
                }}
            />
            <IconButton
                style={"delete"}
                onClick={() => {
                    setOpenDeleteModal(true)
                }}
            />
        </Card>
        <MarketingCampaignsUpdateModal
            closeModal={()=>{
                setOpenUpdateModal(false)
            }}
            open={openUpdateModal}
            campaign={campaignItem}
            campaignId={campaignId}
            refreshCampaigns={()=> refreshList()}
        />
        <DeleteModal
            open={openDeleteModal}
            closeModal={() => {
                setOpenDeleteModal(false)
            }}
            onConfirmClick={() => {
                confirmDelete(campaignChannelId).then(r =>
                setOpenDeleteModal(false))
            }}
            name={campaignName}
        >
        </DeleteModal>
    </>)
}