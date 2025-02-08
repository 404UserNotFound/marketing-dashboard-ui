import {useEffect, useState} from "react";
import MarketingChannelsListItem from "../marketing_channels_list_item/MarketingChannelsListItem.jsx";
import MarketingChannelCreateModal from "../marketing_channels_modals/marketing_channel_create_modal/MarketingChannelCreateModal.jsx";
import ColouredIconButton from "../../../common/components/coloured-icon-button/ColouredIconButton.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchChannels} from "../../../redux/thunks/channelThunks.js";

export default function MarketingChannelsList() {
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const dispatch = useDispatch();
    const { channelList, channelRequestStatus, channelError } = useSelector((state) => state.channel);
    const refreshList = () => {
        dispatch(fetchChannels());
    };

    useEffect(() => {
        dispatch(fetchChannels());
    }, [dispatch]);


    if (channelRequestStatus === "loading") return <p>Loading...</p>;
    if (channelRequestStatus === "failed") return <p>Error: {channelError}</p>;

    return (<>
        {channelList.map((item) => (
            <MarketingChannelsListItem
            channels={item}
            key={item.channelId}
            refreshChannelList={()=>refreshList()}
        />))}
        <ColouredIconButton
            style={"create"}
            onClick={() => setOpenCreateModal(true)}/>
        <MarketingChannelCreateModal
            open={openCreateModal}
            closeModal={() => {
                setOpenCreateModal(false)
            }}
            refreshChannelList={()=>refreshList()}
        />
    </>)
}