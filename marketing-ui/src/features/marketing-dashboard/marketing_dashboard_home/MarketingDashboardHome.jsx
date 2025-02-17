import {useEffect} from "react";
import {fetchCampaigns} from "../../../redux/thunks/campaignThunks.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchChannels} from "../../../redux/thunks/channelThunks.js";
import BasicBarChart from "../../../common/components/charts/BasicBarChart.jsx";
import BasicHorizontalChart from "../../../common/components/charts/BasicHorizontalChart.jsx";
import BasicPieChart from "../../../common/components/charts/BasicPieChart.jsx";
import "./MarketingDashboardHome.scss"

export default function MarketingDashboardHome() {
    const dispatch = useDispatch();
    const {campaignRequestStatus, campaignError} = useSelector((state) => state.campaign);
    const {channelRequestStatus, channelError} = useSelector((state) => state.channel);

    useEffect(() => {
        dispatch(fetchCampaigns())
        dispatch(fetchChannels())
    }, []);

    if (campaignRequestStatus === "loading" || channelRequestStatus === "loading") return <p>Loading...</p>;
    if (campaignRequestStatus === "failed" || channelRequestStatus === "failed") return <p>Error: {campaignError || channelError}</p>;

    return (
        <div className="marketing-dashboard">
            <div className="chart-container horizontal-chart">
                <BasicBarChart />
            </div>
            <div className="chart-container">
                <BasicPieChart />
            </div>
            <div className="chart-container">
                <BasicHorizontalChart />
            </div>
        </div>
    );
};