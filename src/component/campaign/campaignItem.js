import React from 'react'
import ProgressBar from '../progress/progressBar'
import NumberFormat from "react-number-format";
import { Link } from 'react-router-dom';
const CampaignItem = ({ typeTap, title, donate, totalDonate, user, endDate, image, type, value, id }) => {
  return (
    <div>
      <Link to={`/${typeTap === "donate" ? 'campaigns' : typeTap}/${id}`}>
        <div className="my-4  rounded-lg overflow-hidden flex shadow-[0_2px_10px_0px_rgba(0,0,0,0.2)]">
          <div className="w-1/3 h-full">
            <img src="/img/camItem.png" alt="" width="100%" className='object-cover h-full' />
          </div>
          <div className="p-3 w-full">
            <div className=" flex items-center justify-between">
              <div className="font-bold">{title}</div>
              <div>
                <img src="/img/icon/favorite.svg" alt="" width="15px" />
              </div>
            </div>
            <div className="text-sm text-$gray">
              <div>
                บริจาค
                <span className="text-$orange font-semibold mx-1">
                  <NumberFormat
                    thousandsGroupStyle="thousand"
                    value={donate}
                    decimalSeparator="."
                    displayType="text"
                    type="text"
                    thousandSeparator={true}
                  />
                </span>
                บาท จาก
                <span className="mx-1">
                  <NumberFormat
                    thousandsGroupStyle="thousand"
                    value={totalDonate}
                    decimalSeparator="."
                    displayType="text"
                    type="text"
                    thousandSeparator={true}
                  />
                </span>

              </div>
            </div>
            <div>
              <div>
                <ProgressBar value={value} />
              </div>
            </div>

            <div className="text-xs flex justify-between items-center text-$gray">
              <div>
                คนบริจาค
                <span className="text-$orange font-semibold mx-1">
                  <NumberFormat
                    thousandsGroupStyle="thousand"
                    value={user}
                    decimalSeparator="."
                    displayType="text"
                    type="text"
                    thousandSeparator={true}
                  />
                </span>
                บาท
              </div>
              <div>เหลืออีก <span className="text-$orange font-semibold">1 เดือน</span></div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CampaignItem