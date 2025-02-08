import HomeView from "./features/home/HomeView.jsx";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import MarketingCampaignsHome from "./features/marketing-campaigns/marketing_campaigns_home/MarketingCampaignsHome.jsx";
import MarketingChannelsHome from "./features/marketing-channels/marketing_channels_home/MarketingChannelsHome.jsx";
import NavTab from "./common/components/tabs/NavTab.jsx";

function App() {
  return (
      <>
        <BrowserRouter>
            <NavTab />
            <Routes>
                    <Route path={"/"} element={<HomeView />} />
                    <Route path="campaigns" element={<MarketingCampaignsHome />} />
                    <Route path="channels" element={<MarketingChannelsHome />} />
            </Routes>
        </BrowserRouter>
      </>

  )
}

export default App
