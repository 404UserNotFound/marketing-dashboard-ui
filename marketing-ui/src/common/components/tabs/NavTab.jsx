import React from "react";
import {useLocation, useNavigate } from "react-router-dom";
import { Tabs, Tab, Box } from "@mui/material"

const tabRoutes = ["/", "/campaigns", "/channels"];

export default function NavTab() {
    const location = useLocation();
    const navigate = useNavigate();
    const currentTab = tabRoutes.indexOf(location.pathname);

    return (
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
                value={currentTab !== -1 ? currentTab : 0}
                onChange={(event, newValue) => navigate(tabRoutes[newValue])}
            >
                <Tab label="Home" />
                <Tab label="Campaigns" />
                <Tab label="Channels" />
            </Tabs>
        </Box>
    );
};

