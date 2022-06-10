import React from 'react'

const CommentItem = () => {
  return (
    <div className='shadow-[0_2px_10px_1px_rgba(0,0,0,0.1)] rounded-lg p-3 my-2'>
      <div className='flex items-center gap-3'>
        <div>
          <img src="/img/mainAvatar.png" alt="" width={"36px"} />
        </div>
        <div className='text-sm'>
          <div>
            ธรรมดา แสนวิเศษ
          </div>
          <div className='text-$gray'>
            Today
          </div>
        </div>
      </div>

      <div>
        <div className='text-xs py-3 border-b border-solid border-$gray-light '>
          Hopefully Audrey can get surgery soon, recover from her illness, and play with her friends.
        </div>
      </div>

      <div className='flex  justify-between items-center mt-3'>
        <div className='flex items-center gap-2'>
          <div>
            <img src="/img/icon/hart.svg" alt="" />
          </div>
          <div className='text-sm text-$gray'>
            123
          </div>
        </div>
        <div>
          <img src="/img/icon/share.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default CommentItem