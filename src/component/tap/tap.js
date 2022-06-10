import React from 'react'
import CampaignItem from '../campaign/campaignItem'
const Tap = ({ data, setTypeTap, typeTap }) => {
  return (
    <div>
      <div className="flex justify-center w-full h-[35px] bg-$gray-light rounded-lg">
        <div
          className={`${typeTap === "donate" ? "bg-$orange text-$white" : null}  w-1/2  flex items-center justify-center rounded-lg`}
          onClick={() => setTypeTap("donate")}
        >
          Donate
        </div>
        <div
          className={`${typeTap === "vote" ? "bg-$orange text-$white" : null} w-1/2 bg-$gray-light flex items-center justify-center rounded-lg`}
          onClick={() => setTypeTap("vote")}
        >
          Vote
        </div>
      </div>
      <div >
        {data &&
          data.map((item, key) => (
            <React.Fragment key={key}>
              <CampaignItem
                typeTap={typeTap}
                title={item.title}
                donate={item.donate}
                endDate={item.endDate}
                id={item.id}
                image={item.image}
                totalDonate={item.totalDonate}
                type={item.type}
                user={item.user}
                value={item.value}
              />
            </React.Fragment>
          ))}

      </div>

    </div>
  )
}

export default Tap