import React from 'react'
import ProgressBar from '../progress/progressBar'
import NumberFormat from "react-number-format";
import { Link } from 'react-router-dom';

const FavoriteItem = ({ typeTap, title, donate, totalDonate, user, endDate, image, type, value, id }) => {
  return (
    <div>
      <Link to={`/campaigns/1`}>
        <div className="my-4  rounded-lg overflow-hidden flex shadow-[0_2px_10px_0px_rgba(0,0,0,0.2)]">
          <div className="w-1/3 h-full">
            <img src="/img/camItem.png" alt="" width="100%" className='object-cover h-full' />
          </div>
          <div className="p-3 w-full flex flex-col gap-1">
            <div className=" flex items-center justify-between">
              <div className="font-bold">
                {/* {title} */}
                ชื่อแคมเปญ
              </div>
              <div>
                <img src="/img/icon/favoriteOr.svg" alt="" width="15px" />
              </div>
            </div>
            <div className="text-sm text-$gray">
              <div>
                บริจาค
                <span className="text-$orange font-semibold mx-1">
                  <NumberFormat
                    thousandsGroupStyle="thousand"
                    value={3000}
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
                    value={200000}
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
                    value={2000}
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

export default FavoriteItem