import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import {useSelector} from "react-redux";
import "./BasicBarChart.scss"

export default function BasicBarChart() {
    const {campaignList} = useSelector((state) => state.campaign);

    return (
        <div className="dashboard-bar-chart">
            <BarChart
                xAxis={[{
                    scaleType: "band",
                    data: campaignList.map((campaign) => campaign.campaignName),
                    categoryGapRatio: 0.5
                }]}
                series={[{
                    data: campaignList.map((campaign) => campaign.campaignBudget),
                    label: "Budget Per Campaign (€)"
                }]}
                width={800}
                height={300}
            />
        </div>
    );
}