import MarketingCampaignsListItem from "../marketing_campaigns_list_item/MarketingCampaignsListItem.jsx";
import {useEffect, useState} from "react";
import ColouredIconButton from "../../../common/components/coloured-icon-button/ColouredIconButton.jsx";
import MarketingCampaignsCreateModal
    from "../marketing_campaigns_modals/marketing_campaigns_create_modal/MarketingCampaignsCreateModal.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchCampaigns} from "../../../redux/thunks/campaignThunks.js";

export default function MarketingCampaignsList() {

    const [openCreateModal, setOpenCreateModal] = useState(false);
    const dispatch = useDispatch();
    const { campaignList, requestStatus, error } = useSelector((state) => state.campaign);

    const refreshList = () => {
        dispatch(fetchCampaigns());
    };

    useEffect(() => {
        dispatch(fetchCampaigns());
    }, [dispatch]);

    if (requestStatus === "loading") return <p>Loading...</p>;
    if (requestStatus === "failed") return <p>Error: {error}</p>;

    return (<>
        {campaignList.map((campaign) => (<MarketingCampaignsListItem
            campaignItem={campaign}
            key={campaign.campaignChannelId}
            refreshList={()=>refreshList()}
        />))}
        <ColouredIconButton
            style={"create"}
            onClick={() => setOpenCreateModal(true)}/>
        <MarketingCampaignsCreateModal
            open={openCreateModal}
            refreshList={()=>refreshList()}
            closeModal={() => {
                setOpenCreateModal(false)
            }}
        />
    </>)
};