import React, { useEffect, useState } from 'react'
import HomeBanner from '../component/banner/homeBanner';
import Tap from '../component/tap/tap';
import SearchInput from '../component/input/searchInput';
import { Link } from "react-router-dom";
import { getListCampaign } from '../service/campaign/campaignService'
const HomePage = () => {
  const [dataCam, setDataCam] = useState()
  const [typeTap, setTypeTap] = useState("donate")
  console.log('%cMyProject%cline:9%ctypeTap', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(39, 72, 98);padding:3px;border-radius:2px', typeTap)
  const getDataCampaign = async (type) => {
    const data = await getListCampaign(type)
    if(data){
      setDataCam(data)
    }
  }
  useEffect(() => {
    getDataCampaign(typeTap)
  }, [typeTap])

  return (
    <div>
      <main className="px-3 animate-fade-in-down">
        <div className="flex justify-between items-center py-3">
          <div className="font-semibold">Name</div>
          <div>
            <Link to="/profile">
              <img src="/img/avatar.png" alt="" width="48px" />
            </Link>
          </div>
        </div>
        <SearchInput />
        <HomeBanner />
        <Tap data= {dataCam} setTypeTap = {setTypeTap} typeTap = {typeTap}/>
      </main>
    </div>
  )
}

export default HomePage