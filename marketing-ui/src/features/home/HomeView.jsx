import MarketingDashboardHome from "../marketing-dashboard/marketing_dashboard_home/MarketingDashboardHome.jsx";
import MarketingCampaignsHome from "../marketing-campaigns/marketing_campaigns_home/MarketingCampaignsHome.jsx";
import MarketingChannelsHome from "../marketing-channels/marketing_channels_home/MarketingChannelsHome.jsx";
import NavTab from "../../common/components/tabs/NavTab.jsx";
import {useState} from "react";

export default function HomeView() {
    const [navIndex, setNavIndex] = useState(1)
    return(
        <>
            <NavTab></NavTab>
            <MarketingDashboardHome></MarketingDashboardHome>
            <MarketingCampaignsHome></MarketingCampaignsHome>
            <MarketingChannelsHome></MarketingChannelsHome>
        </>
    )
};