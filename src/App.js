import './App.css';
import Layout from './component/layout/layout';
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  CampaignPage,
  FavoritePage,
  HistoryPage,
  ProfilePage,
  SuggestCampaignPage,
  VotePage,
} from './page'
function App() {
  return (
    <Layout>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campaign" element={<CampaignPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/suggestCampaign" element={<SuggestCampaignPage />} />
        <Route path="/vote" element={<VotePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
