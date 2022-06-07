import React from 'react'
import CampaignItem from '../campaign/campaignItem'

const Tap = () => {
  return (
    <div>
      <div className="flex justify-center w-full h-[35px] bg-$gray-light rounded-lg">
        <div className="w-1/2 bg-$orange text-$white flex items-center justify-center rounded-lg">Donate</div>
        <div className="w-1/2 bg-$gray-light flex items-center justify-center rounded-lg">Vote</div>
      </div>
      <div>
        <CampaignItem />
        <CampaignItem />
        <CampaignItem />
        <CampaignItem />
      </div>
    </div>
  )
}

export default Tap