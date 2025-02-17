import {Card, Typography} from "@mui/material";
import IconButton from "../../../common/components/coloured-icon-button/ColouredIconButton.jsx";
import {useState} from "react";
import DeleteModal from "../../../common/components/delete-modal/DeleteModal.jsx";
import MarketingCampaignsUpdateModal
    from "../marketing_campaigns_modals/marketing_campaigns_update_modal/MarketingCampaignsUpdateModal.jsx";
import {useDispatch} from "react-redux";
import {deleteCampaign} from "../../../redux/thunks/campaignThunks.js";
import "./MarketingCampaignsListItem.scss"

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
        <Card className="campaign-card">
            <div className={"campaign-details"}>
            <Typography variant="h6" color="teal">{campaignName}</Typography>
            <Typography>{campaignDescription}</Typography>
            {channelNames.map((channelName)=> <Typography variant="h7" key={channelName}>{channelName}</Typography>)}
            </div>
            <div className="campaign-chips">
                <div className="chip-item">{campaignStatus}</div>
                <div className="chip-item">€ {campaignBudget}</div>
                <div className="chip-item">{campaignStartDate}</div>
                <div className="chip-item">{campaignEndDate}</div>
            </div>
            <div className={"campaign-actions"}>
                <IconButton
                    classname={"icon-button"}
                    style={"edit"}
                    onClick={() => {
                        setOpenUpdateModal(true)
                    }}
                />
                <IconButton
                    classname={"icon-button"}
                    style={"delete"}
                onClick={() => {
                    setOpenDeleteModal(true)
                }}
            />
            </div>
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