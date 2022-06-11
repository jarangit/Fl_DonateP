import React from 'react'
import { useForm, Controller } from "react-hook-form";
const defaultValues = {
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  file: null,

}
const EditUserForm = () => {
  const { handleSubmit, control } = useForm({ defaultValues });
  const onSubmit = (data) => {
    //call api here
    console.log(data);
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 px-3 mt-10">
        <div className='image_upload w-full text-center flex justify-center items-center flex-col'>
          <div className='relative cursor-pointer'>
            <label htmlFor="file-input">
              <img
                src="/img/mainAvatar.png"
                width={"100px"}
                alt=""
                className=' text-center border-2 border-$orange rounded-full '
              />
              <img
                src="/img/icon/pencilCircle.svg"
                alt=""
                className='absolute bottom-0 right-0'
              />
            </label>
          </div>
          <Controller
            name="file"
            control={control}
            render={({ field: { onChange, value } }) => (
              <input
                id="file-input"
                value={value}
                onChange={onChange}
                type={"file"}
              // className="bg-$gray-light w-full h-[36px] rounded-lg mt-2 pl-3" 
              />
            )}
          />
        </div>
        <div>
          <div className='text-sm font-semibold'>
            ชื่อ - นามสกุล
          </div>
          <Controller
            name="name"
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
        <div>
          <div className='text-sm font-semibold'>
            อีเมล
          </div>
          <Controller
            name="email"
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
        <div>
          <div className='text-sm font-semibold'>
            เบอร์โทร
          </div>
          <Controller
            name="phone"
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
        <div>
          <div className='text-sm font-semibold'>
            รหัสผ่าน
          </div>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <input
                type="password"
                value={value}
                onChange={onChange}
                className="bg-$gray-light w-full h-[36px] rounded-lg mt-2 pl-3 text-3xl tracking-[10px]" />
            )}
          />
        </div>
        <div>
          <div className='text-sm font-semibold'>
            ยืนยันรหัสผ่าน
          </div>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field: { onChange, value } }) => (
              <input
                type="password"
                value={value}
                onChange={onChange}
                className="bg-$gray-light w-full h-[36px] rounded-lg mt-2 pl-3  text-3xl tracking-[10px]" />
            )}
          />
        </div>

        <div>
          <button className='bg-$orange w-full h-[36px] text-$white font-bold rounded-lg mt-6'>ยีนยัน</button>
        </div>
      </form>
    </>
  )
}

export default EditUserForm