import React from 'react'
import Slider from "react-slick";
import CommentItem from './commentItem';
const SlideComment = () => {

  const settings = {
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const arr = [1,2,3]
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className='font-bold'>ความคิดเห็น</div>
        <div className='flex gap-2 items-center text-$gray'>
          <div className='text-sm'>ดูทั้งหมด</div>
          <div>
            <img src="/img/icon/arrowRgray.svg" alt="" />
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {/* {dataImage && */}
         { arr.map((item, key) => (
            <CommentItem />
          ))}
        {/* } */}
      </Slider>
    </div>
  )
}

export default SlideComment