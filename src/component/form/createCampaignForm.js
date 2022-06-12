import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import TypeCampaignInput from '../input/typeCampaignInput';
const defaultValues = {
  nameCampaign: '',
  beneficiary: '',
  typeCampaign: '',
  imageCampaign: '',
  descriptionCampaign: '',
  time: '',
  goal: '',
  imageCampaign2: '',
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