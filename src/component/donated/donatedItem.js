import React from 'react'
import ProgressBar from '../progress/progressBar'
import NumberFormat from "react-number-format";
import { Link } from 'react-router-dom';
const DonatedItem = ({ typeTap, title, donate, totalDonate, user, endDate, image, type, value, id }) => {
  return (
    <div>
      <Link to={`/${typeTap === "donate" ? 'campaigns' : typeTap}/${id}`}>
        <div className="my-4 overflow-hidden flex border-b pb-4 border-$gray-light">
          <div className=" ">
            <img src="/img/camItem.png" alt="" width={"100px"} className=' rounded-xl' />
          </div>
          <div className="p-3 w-full">
            <div className=" flex items-center justify-between">
              <div className="font-bold">
                {/* {title} */}
                ชื่อแคมเปญ
              </div>
            </div>
            <div className="text-sm text-$gray">
              <div>
                บริจาค
                <span className="text-$orange font-semibold mx-1">
                  <NumberFormat
                    thousandsGroupStyle="thousand"
                    // value={donate}
                    value={300}
                    decimalSeparator="."
                    displayType="text"
                    type="text"
                    thousandSeparator={true}
                  />
                  บาท
                </span>

              </div>
            </div>
            <div>
              <div>
                <ProgressBar
                  // value={value}
                  value={10}
                />
              </div>
            </div>

            <div className="text-xs flex justify-between items-center text-$gray">
              <div>
                คนบริจาค
                <span className="text-$orange font-semibold mx-1">
                  <NumberFormat
                    thousandsGroupStyle="thousand"
                    // value={user}
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

export default DonatedItem