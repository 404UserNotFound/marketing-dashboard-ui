import HomeView from "./features/home/HomeView.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MarketingCampaignsHome from "./features/marketing-campaigns/marketing_campaigns_home/MarketingCampaignsHome.jsx";
import MarketingChannelsHome from "./features/marketing-channels/marketing_channels_home/MarketingChannelsHome.jsx";
import NavTab from "./common/components/tabs/NavTab.jsx";
import "./App.scss"

function App() {
    return (
        <div className="app-container">
            <BrowserRouter>
                <div className="navtab-container">
                    <NavTab />
                </div>

                <div className="content-container">
                    <Routes>
                        <Route path={"/"} element={<HomeView />} />
                        <Route path="campaigns" element={<MarketingCampaignsHome />} />
                        <Route path="channels" element={<MarketingChannelsHome />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
