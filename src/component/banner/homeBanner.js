import React from 'react'
import { BiUser } from 'react-icons/bi'
const HomeBanner = () => {
  return (
    <div className="my-6">
      <div className="rounded-[20px] overflow-hidden h-[165px] relative bg-gradient-to-t from-$gray-dark  ">
        <div className="mix-blend-overlay">
          <img src="/img/banner.png" alt="" width={'100%'} height={"165px"} className=" object-cover w-full h-full absolute" />
        </div>
        <div className='absolute bottom-3 text-$orange left-3'>
          <div className='text-sm font-bold'>
            ชื่อแคมเปญ
          </div>
          <div className='text-xs text-$gray'>รายระเอียด</div>
        </div>
        <div className='absolute bottom-3 right-3 text-$gray text-xs flex  items-center gap-1'>
          <div>
            <BiUser size={15} />
          </div>
          <div>166</div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner