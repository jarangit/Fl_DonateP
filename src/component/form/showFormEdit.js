import React from 'react'

const ShowFormEdit = () => {
  return (
    <div className='px-3'>
      <div className='mainBoxShadow h-[160px] rounded-3xl p-6 relative text-center flex flex-col gap-1 mt-[150px]'>
        <img
          src="/img/mainAvatar.png"
          alt=""
          width={"100px"}
          className="absolute top-[-40%] border-2 border-$orange rounded-full ml-auto mr-auto left-0 right-0"
        />
        <div className='mt-5'>
          คะแนนสะสมทั้งหมด
        </div>
        <div className='text-xl text-$orange font-bold'>
          8,694
        </div>
        <div>
          คะแนน
        </div>
      </div>


      <div className='flex flex-col gap-5 mt-10'>
        <div>
          <div className='text-$gray font-semibold text-sm'>ชื่อ - นามสกุล</div>
          <div>
            <input type="text" className="mainInput" value="ธรรมดา แสนวิเศษ" disabled/>
          </div>
        </div>
        <div>
          <div className='text-$gray font-semibold text-sm'>อีเมล</div>
          <div>
            <input type="text" className="mainInput" value="example@email.com" disabled/>
          </div>
        </div>
        <div>
          <div className='text-$gray font-semibold text-sm'>เบอร์โทร</div>
          <div>
            <input type="text" className="mainInput" value="062xxxxxxx" disabled/>
          </div>
        </div>
        <div>
          <div className='text-$gray font-semibold text-sm'>รหัสผ่าน</div>
          <div>
            <input type="password" className="mainInput text-3xl tracking-[10px]" value="123456789" disabled/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ShowFormEdit