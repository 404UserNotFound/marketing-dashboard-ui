import MarketingCampaignsListItem from "../marketing_campaigns_list_item/MarketingCampaignsListItem.jsx";
import {useEffect, useState} from "react";
import ColouredIconButton from "../../../common/components/coloured-icon-button/ColouredIconButton.jsx";
import MarketingCampaignsCreateModal
    from "../marketing_campaigns_modals/marketing_campaigns_create_modal/MarketingCampaignsCreateModal.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchCampaigns} from "../../../redux/thunks/campaignThunks.js";
import "./MarketingCampaignsList.scss"

export default function MarketingCampaignsList() {

    const [openCreateModal, setOpenCreateModal] = useState(false);
    const dispatch = useDispatch();
    const {campaignList, campaignRequestStatus, campaignError} = useSelector((state) => state.campaign);

    const refreshList = () => {
        dispatch(fetchCampaigns());
    };

    useEffect(() => {
        dispatch(fetchCampaigns());
    }, [dispatch]);

    if (campaignRequestStatus === "loading") return <p>Loading...</p>;
    if (campaignRequestStatus === "failed") return <p>Error: {campaignError}</p>;

    return (
        <>
            <div className="stack-create-button-label">
                <ColouredIconButton
                    style={"create"}
                    onClick={() => setOpenCreateModal(true)}/>
            </div>
            <div className="campaigns-list-grid">
                {campaignList.map((campaign) => (<MarketingCampaignsListItem
                    campaignItem={campaign}
                    key={campaign.campaignChannelId}
                    refreshList={() => refreshList()}
                />))}
            </div>
                <MarketingCampaignsCreateModal
                    open={openCreateModal}
                    refreshList={() => refreshList()}
                    closeModal={() => {
                        setOpenCreateModal(false)
                    }}
                />
        </>
    )
};