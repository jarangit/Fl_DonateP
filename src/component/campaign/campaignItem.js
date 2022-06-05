import React from 'react'
import ProgressBar from '../progress/progressBar'

const CampaignItem = () => {
  return (
    <div className="my-4  rounded-lg overflow-hidden flex shadow-[0_2px_10px_0px_rgba(0,0,0,0.2)]">
      <div className="w-1/3 h-full">
        <img src="/img/camItem.png" alt="" width="100%" className='object-cover h-full' />
      </div>
      <div className="p-3 w-full">
        <div className=" flex items-center justify-between">
          <div className="font-bold">ชื่อแคมเปญ</div>
          <div>
            <img src="/img/icon/favorite.svg" alt="" width="15px" />
          </div>
        </div>
        <div className="text-sm text-$gray">
          <div>บริจาค <span className="text-$orange font-semibold">30,00</span> บาท จาก 200,000</div>
        </div>
        <div>
          <div>
            <ProgressBar value={70} />
          </div>
        </div>

        <div className="text-xs flex justify-between items-center text-$gray">
          <div>คนบริจาค <span className="text-$orange font-semibold">2,000 บาท</span></div>
          <div>เหลืออีก <span className="text-$orange font-semibold">1 เดือน</span></div>
        </div>
      </div>
    </div>
  )
}

export default CampaignItem