import React from "react";
import {useLocation, useNavigate } from "react-router-dom";
import { Tabs, Tab, Box } from "@mui/material"

const tabRoutes = ["/", "/campaigns", "/channels"];

export default function NavTab() {
    const location = useLocation();
    const navigate = useNavigate();
    const currentTab = tabRoutes.indexOf(location.pathname);

    return (
        <Box>
            <Tabs
                orientation="vertical"
                value={currentTab !== -1 ? currentTab : 0}
                onChange={(event, newValue) => navigate(tabRoutes[newValue])}
            >
                <Tab label={<span style={{color: "white"}}>Home</span>}/>
                <Tab label={<span style={{color: "white"}}>Campaigns</span>}/>
                <Tab label={<span style={{color: "white"}}>Channels</span>}/>
            </Tabs>
        </Box>
    );
};

