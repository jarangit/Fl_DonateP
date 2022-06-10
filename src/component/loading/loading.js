import React from 'react'
import ReactLoading from 'react-loading';
const Loading = () => {
  return (
    <div className='w-full h-screen'>
      <div className='absolute top-1/2 left-[43%]'>
        <ReactLoading type={"spin"} color={"#FF7517"} height={50} width={50} />
      </div>
 </div>
  )
}

export default Loading