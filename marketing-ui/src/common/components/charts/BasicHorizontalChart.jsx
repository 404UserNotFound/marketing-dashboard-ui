import React from "react";
import {BarChart} from "@mui/x-charts/BarChart";
import {useSelector} from "react-redux";
import "./BasicHorizontalChart.scss"

export default function BasicHorizontalChart() {
    const {campaignList} = useSelector((state) => state.campaign);
    const campaignDurationData = campaignList.map((campaignItem) => ({
        campaign: campaignItem.campaignName,
        start: new Date(campaignItem.campaignStartDate).getFullYear(),
        duration: new Date(campaignItem.campaignEndDate).getFullYear() - new Date(campaignItem.campaignStartDate).getFullYear(),
    }));

    return (
        <div className="dashboard-horizontal-chart">
            <BarChart
                sx={{padding:'5px'}}
                margin={{
                    top: 5,
                    right: 10,
                    bottom: 80,
                    left: 100
                }}
                layout="horizontal"
                xAxis={[{
                    scaleType: "linear",
                    min: 0,
                    label: "Campaign Duration (Years)"
                }]}
                yAxis={[{
                    scaleType: "band",
                    data: campaignDurationData.map((c) => c.campaign),
                }]}
                series={[{
                    data: campaignDurationData.map((c) => c.duration),
                }]}
                width={400}
                height={300}
            />
        </div>
    );
};