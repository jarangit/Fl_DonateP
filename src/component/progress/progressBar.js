import React from 'react'

const ProgressBar = ({ value }) => {
  console.log('%cMyProject%cline:3%cvalue', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(3, 38, 58);padding:3px;border-radius:2px', value)
  return (
    <div class="w-full bg-$gray rounded-full h-[4px] dark:bg-gray-700 my-1">
      <div class={`bg-$orange h-[4px] rounded-full`} style={{width: `${value}%`}}></div>
    </div>
  )
}

export default ProgressBar