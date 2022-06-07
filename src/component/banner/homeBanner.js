import React, { useState, useEffect } from 'react'
import { BiUser } from 'react-icons/bi'
import Slider from "react-slick";
import { getBanner } from '../../service/banner/bannerService'
const HomeBanner = () => {
  const [dataImage, setDataImage] = useState()
  const settings = {
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const getData = async () => {
    const data = await getBanner()
    if (data) {
      setDataImage(data)
    }
  }
  useEffect(() => {
    //Call api get image 
    getData()
  }, [])

  return (
    <div className="my-6 ">
      <Slider {...settings}>
        {dataImage &&
          dataImage.map((item,key) => (
            <div className="w-full rounded-[20px] overflow-hidden h-[165px] relative bg-gradient-to-t from-$gray-dark">
              <div className="mix-blend-overlay ">
                <img src={item.image} alt="" width={'100%'} height={"165px"} className=" object-cover w-full h-full absolute" />
              </div>
              <div className='absolute bottom-3 text-$orange left-3'>
                <div className='text-sm font-bold'>
                  {item.name}
                </div>
                <div className='text-xs text-$gray'>รายระเอียด</div>
              </div>
              <div className='absolute bottom-3 right-3 text-$gray text-xs flex  items-center gap-1'>
                <div>
                  <BiUser size={15} />
                </div>
                <div>{item.view}</div>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default HomeBanner