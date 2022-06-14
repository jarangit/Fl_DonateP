import React, { useState } from 'react'
import TopBar from '../../component/layout/topBar'
import TapContent from '../../component/tap/tapContent'
import TapNavItem from '../../component/tap/tapNavItem'
import ListDonated from '../../component/donated/listDonated'
import ListSentCampaign from '../../component/campaign/listSentCampaign'
import ListVoted from '../../component/vote/listVoted'
const HistoryPage = () => {
  const [activeTap, setActiveTap] = useState("tap1")

  return (
    <div className="animate-fade-in-down">
      <div className='mainBoxShadow p-3'>
        <TopBar
          name="History"
          link={`/`}
        />
        <ul className='flex justify-between mt-10 h-10 items-center'>
          <TapNavItem
            id="tap1"
            activeTab={activeTap}
            setActiveTab={setActiveTap}
            title="รายการบริจาค"
          />
          <TapNavItem
            id="tap2"
            activeTab={activeTap}
            setActiveTab={setActiveTap}
            title="รายการส่งแคมเปญ"
          />
          <TapNavItem
            id="tap3"
            activeTab={activeTap}
            setActiveTab={setActiveTap}
            title="รายการที่โหวต"
          />
        </ul>
      </div>

      <div>
        <TapContent
          id="tap1"
          activeTab={activeTap}
        >
          <ListDonated />
        </TapContent>
        <TapContent
          id="tap2"
          activeTab={activeTap}
        >
          <ListSentCampaign />
        </TapContent>
        <TapContent
          id="tap3"
          activeTab={activeTap}
        >
          <ListVoted />
        </TapContent>
      </div>
    </div>)
}

export default HistoryPage