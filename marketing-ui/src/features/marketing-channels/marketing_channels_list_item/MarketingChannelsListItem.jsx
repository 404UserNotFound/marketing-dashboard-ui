import {Card, Typography} from "@mui/material";
import IconButton from "../../../common/components/coloured-icon-button/ColouredIconButton.jsx";
import {useState} from "react";
import DeleteModal from "../../../common/components/delete-modal/DeleteModal.jsx";
import UpdateModal from "../marketing_channels_modals/marketing_channel_update_modal/MarketingChannelUpdateModal.jsx";
import {useDispatch} from "react-redux";
import {deleteChannel} from "../../../redux/thunks/channelThunks.js";
import "./MarketingChannelsListItem.scss"

export default function MarketingChannelsListItem(props) {
    const {
        channels,
        refreshChannelList
    } = props;
    const {
        channelId,
        name
    } = channels;
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const dispatch = useDispatch();

    async function confirmDelete(channelId) {
        await dispatch(deleteChannel(channelId))
        refreshChannelList()
    }


    return (<>
        <Card className="channel-card">
            <Typography color="grey" variant="h6">{channels.name}</Typography>
            <div className="channel-actions">
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
            </div>
        </Card>
        <DeleteModal
            open={openDeleteModal}
            closeModal={() => {
                setOpenDeleteModal(false)
            }}
            onConfirmClick={() => {
                confirmDelete(channelId)
                    .then(()=>
                        setOpenDeleteModal(false)
                    )
            }}
            name={name}
        >
        </DeleteModal>
        <UpdateModal
            open={openUpdateModal}
            closeModal={() => {
                setOpenUpdateModal(false)
            }}
            channels={channels}
            refreshChannelList={()=>refreshChannelList()}
        />
    </>)
}