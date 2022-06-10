import CampaignItem from '../campaign/campaignItem'
import React, { useEffect, useState } from 'react'
import { getListCampaign } from '../../service/campaign/campaignService'
import Loading from '../loading/loading'

const Tap = () => {
  const [dataContent, setDataContent] = useState()
  const [typeTap, setTypeTap] = useState("donate")
  const [loading, setLoading] = useState(false)
  const getDataCampaign = async (type) => {
    setLoading(true)
    const data = await getListCampaign(type)
    if (data) {
      setDataContent(data)
    }

    setTimeout(() => {
      setLoading(false)
    }, 300);

  }
  useEffect(() => {
    getDataCampaign(typeTap)
  }, [typeTap])
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

      <div>
        {loading ? (
          <div className=' relative'>
            <Loading />
          </div>
        ) : (
          <div >
            {dataContent &&
              dataContent.map((item, key) => (
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
        )}
      </div>

    </div>
  )
}

export default Tap