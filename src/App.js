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
} from './routes'
import CampaignId from './routes/campaign/$campaign';
import VoteId from './routes/vote/$vote';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="campaigns" >
          <Route index element={<CampaignPage />} />
          <Route path=":campaignId" element={<CampaignId />} />
        </Route>
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/suggestCampaign" element={<SuggestCampaignPage />} />
        <Route path="vote"  >
          <Route index element={<VotePage />} />
          <Route path=":voteId" element={<VoteId />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
