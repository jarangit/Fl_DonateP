import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import TypeCampaignInput from '../input/typeCampaignInput';
const defaultValues = {
  nameCampaign: '',
  beneficiary: '',
  typeCampaign: '',
  imageCampaign: '',
  descriptionCampaign: '',
  goal: '',
  imageCampaign2: '',
  startDate: '',
  endDate: '',
}

const CreateCampaignForm = () => {
  const { handleSubmit, control } = useForm({ defaultValues });
  const onSubmit = (data) => {
    //call api here
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div id="box1" className="flex flex-col gap-5 py-5 px-3 border border-$gray-light rounded-lg">
        <div>
          <div className='text-sm font-semibold'>
            ชื่อแคมเปญ
          </div>
          <Controller
            name="nameCampaign"
            control={control}
            render={({ field: { onChange, value } }) => (
              <input
                value={value}
                onChange={onChange}
                type={"text"}
                className="bg-$gray-light w-full h-[36px] rounded-lg mt-2 pl-3" />
            )}
          />
        </div>
        <div >
          <div className='text-sm font-semibold'>
            ผู้รับผลประโยชน์
          </div>
          <Controller
            name="beneficiary"
            control={control}
            render={({ field: { onChange, value } }) => (
              <input
                value={value}
                onChange={onChange}
                type={"text"}
                className="bg-$gray-light w-full h-[36px] rounded-lg mt-2 pl-3" />
            )}
          />
        </div>
        <div >
          <div className='text-sm font-semibold'>
            ประเภทของแคมเปญ
          </div>
          <Controller
            name={"typeCampaign"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TypeCampaignInput
                value={value}
                onChange={onChange}
              />
            )}
          />
        </div>
        <div >
          <div className='text-sm font-semibold'>
            อัพโหลดรูปแคมเปญ
          </div>
          <Controller
            name={"imageCampaign"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className='image_upload bg-$gray-light h-[96px] flex justify-center items-center rounded-lg mt-2 border-dashed border border-$gray'>
                <label htmlFor="file-input">
                  <img src="/img/icon/uploadImage.png" alt="" width={"24px"} />
                </label>
                <input id="file-input" type={"file"} onChange={onChange} value={value} />
              </div>
            )}
          />
        </div>

        <div >
          <div className='text-sm font-semibold'>
            คำอธิบายแคมเปญ
          </div>
          <Controller
            name="descriptionCampaign"
            control={control}
            render={({ field: { onChange, value } }) => (
              <textarea
                value={value}
                onChange={onChange}
                type={"text"}
                className="bg-$gray-light w-full h-[96px] rounded-lg mt-2 pl-3" />
            )}
          />
        </div>
      </div>

      <div id="box2" className="flex flex-col gap-5 py-5 px-3 border border-$gray-light rounded-lg">
        <div>
          <div className='text-sm font-semibold'>
            ระยะเวลาในการดำเนินโครงการ
          </div>
          <div className="flex w-full gap-5 mt-3">
            <div className="w-full">
              <div className='text-sm'>
                วันที่เริ่มต้น
              </div>
              <Controller
                name="startDate"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <input
                    value={value}
                    onChange={onChange}
                    type={"date"}
                    className="bg-$gray-light w-full h-[36px] rounded-lg mt-2 pl-3" />
                )}
              />
            </div>
            <div className="w-full">
              <div className='text-sm'>
                วันที่สิ้นสุด
              </div>
              <Controller
                name="endDate"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <input
                    value={value}
                    onChange={onChange}
                    type={"date"}
                    className="bg-$gray-light w-full h-[36px] rounded-lg mt-2 pl-3" />
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="box3" className="flex flex-col gap-5 py-5 px-3 border border-$gray-light rounded-lg">
        <div>
          <div className='text-sm font-semibold'>
            เป้าหมาย
          </div>
          <Controller
            name="goal"
            control={control}
            render={({ field: { onChange, value } }) => (
              <label className='relative'>
                <input
                  value={value}
                  onChange={onChange}
                  type={"text"}
                  className="bg-$gray-light w-full h-[36px] rounded-lg mt-2 pl-3" />
                <div className='absolute top-0 right-4'>บาท</div>
              </label>
            )}
          />
        </div>
      </div>

      <div id="box4" className="flex flex-col gap-5 py-5 px-3 border border-$gray-light rounded-lg">
        <div >
          <div className='text-sm font-semibold'>
            อัพโหลดรูปแคมเปญ
          </div>
          <Controller
            name={"imageCampaign2"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className='image_upload bg-$gray-light h-[56px] w-[56px] flex justify-center items-center rounded-lg mt-2 border-dashed border border-$gray'>
                <label htmlFor="file-input2">
                  <img src="/img/icon/uploadImage.png" alt="" width={"24px"} />
                </label>
                <input id="file-input2" type={"file"} onChange={onChange} value={value} />
              </div>
            )}
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className='w-full bg-$orange text-$white  h-[36px] rounded-lg mt-6'
        >
          ส่งแคมเปญ
        </button>
      </div>
    </form>
  )
}

export default CreateCampaignForm