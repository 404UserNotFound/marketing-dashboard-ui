import * as React from 'react';
import { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import { PieChart } from "@mui/x-charts/PieChart";
import "./BasicPieChart.scss"

export default function BasicPieChart() {
    const { campaignList } = useSelector((state) => state.campaign);
    const [channelData, setChannelData] = useState(campaignList);
    const transformData = (cList) => {
        const channelMap = {};

        cList.forEach(({ channelNames }) => {
            channelNames.forEach((channel) => {
                channelMap[channel] = (channelMap[channel] || 0) + 1;
            });
        });

        return Object.keys(channelMap).map((channel) => ({
            id: channel,
            label: channel,
            value: channelMap[channel],
        }));
    };

    useEffect(() => {
        if (campaignList.length > 0) {
            setChannelData(transformData(campaignList));
        }
    }, [campaignList]);

    return (
        <div className="dashboard-pie-chart">
            <PieChart
                series={[
                    {
                        data: channelData,
                        outerRadius: 100,
                        innerRadius: 30
                    },
                ]}
                height={300}
                width={500}
            />
        </div>
    );
}
