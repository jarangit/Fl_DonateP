import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SlideComment from '../../component/comment/slideComent';
import TopBar from '../../component/layout/topBar';
import Loading from '../../component/loading/loading';
import ProgressBar from '../../component/progress/progressBar';
import { getCampaign } from '../../service/campaign/campaignService'
const CampaignId = () => {
  const { campaignId } = useParams()
  const [dataCampaign, setDataCampaign] = useState()
  const [loading, setLoading] = useState(false)

  const getData = async (id) => {
    setLoading(true)
    const data = await getCampaign(id)
    if (data) {
      setDataCampaign(data)
    }

    setTimeout(() => {
      setLoading(false)
    }, 300);
  }

  useEffect(() => {
    if (campaignId) {
      getData(campaignId)
    }
  }, [campaignId])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="p-3 animate-fade-in-down">
          <TopBar
            name="Campaign"
            link={`/`}
            icon={`/img/icon/like.svg`}
          />
          <div className=" p-3">
            <img src={'/img/banner2.png'} alt="" width={'100%'} height={"165px"} className=" object-cover w-full h-full rounded-[20px]" />
          </div>
          {dataCampaign ? (
            <div className="p-3">
              <div className=" flex justify-between items-center">
                <div>
                  <div className='text-lg font-bold mb-2'>
                    โรงเรียนเพื่อชีวิต
                  </div>

                </div>
                <div className=' rounded-lg p-1 shadow-[0_2px_10px_1px_rgba(0,0,0,0.1)]'>
                  <img src="/img/icon/favoriteOr.svg" alt="" />
                </div>
              </div>

              <div className='text-xs'>
                ผู้รับผลประโยชน์ : ชื่อ
              </div>

              <div className='flex items-center gap-1 my-3'>
                <div className='flex flex-row-reverse'>
                  <img src="/img/avatar2.png" alt="" className=' ml-[-15px]' width={"25px"} />
                  <img src="/img/avatar3.png" alt="" className=' ml-[-15px]' width={"25px"} />
                  <img src="/img/avatar.png" alt="" className=' ' width={"25px"} />
                </div>
                <div className='text-xs'>300 คนที่ถูกใจ</div>
              </div>

              <div className=" flex justify-between relative my-6">
                <div className='flex gap-5 items-center'>
                  <div className=' bg-$orange p-2 rounded-lg'>
                    <img src="/img/icon/time.svg" alt="" />
                  </div>
                  <div>
                    <div className='text-xs text-$gray'>ระยะเวลา</div>
                    <div className='text-sm font-bold'>1 ปี</div>
                  </div>
                </div>

                <div className='absolute w-[1px] bg-$gray h-10 left-1/2' />

                <div className='flex gap-5 items-center'>
                  <div className=' bg-$orange p-2 rounded-lg'>
                    <img src="/img/icon/user.svg" alt="" />
                  </div>
                  <div>
                    <div className='text-xs text-$gray'>จำนวน</div>
                    <div className='text-sm font-bold'>166 คน</div>
                  </div>
                </div>
              </div>

              <div className='shadow-[0_2px_10px_1px_rgba(0,0,0,0.1)] p-2 rounded-lg my-6'>
                <div className='text-xs text-$gray'>เป้าหมาย</div>
                <div className='flex justify-between items-center my-2'>
                  <div>200,000 บาท</div>
                  <div className='text-sm text-$gray'>60%</div>
                </div>
                <div>
                  <ProgressBar value={dataCampaign.value} />
                </div>
                <div className='flex justify-between items-center my-2 text-xs'>
                  <div className='text-$gray'>ยอดบริจาคขณะนี้</div>
                  <div className='text-$orange font-semibold'>2,700 บาท</div>
                </div>
              </div>

              <div>
                <div className='font-bold'>รายละเอียด</div>
                <div className='text-xs text-$gray'>
                  สนับสนุนอาหารกลางวัน และการฝึกทักษะอาชีพ สำหรับโครงการ
                  โรงเรียนเพื่อชีวิต โดยมูลนิธิพันธกิจพระพร (ไทย) เพื่อให้เด็กๆ ได้รับ
                  การศึกษา โภชนาการ ทักษะชีวิต และจริยธรรมที่เหมาะสม รวมถึง
                  สร้างพื้นที่ปลอดภัยให้เด็กๆ เพื่อลดปัญหาด้านพฤติกรรมและสังคม
                </div>

                <div className='grid grid-cols-2 gap-2 my-6'>
                  <div>
                    <img src="/img/banner3.png" alt="" className='rounded-lg' />
                  </div>
                  <div>
                    <img src="/img/banner4.png" alt="" className='rounded-lg' />
                  </div>
                </div>
              </div>

              <div>
                {/* <CommentItem/> */}
                <SlideComment />
              </div>

              <div>
                <button
                  className='bg-$orange w-full mt-6 h-[35px] text-$white rounded-lg font-bold'
                >บริจาค</button>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </>
  )
}

export default CampaignId