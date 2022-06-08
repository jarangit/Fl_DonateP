import React from 'react'

const ProgressBar = ({ value }) => {
  return (
    <div className="w-full bg-$gray rounded-full h-[4px] dark:bg-gray-700 my-1">
      <div className={`bg-$orange h-[4px] rounded-full`} style={{width: `${value}%`}}></div>
    </div>
  )
}

export default ProgressBar