import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = ({
  name,
  link,
  icon,
}) => {
  return (
    <div className="flex  items-center justify-between mb-3">
      <div className="cursor-pointer">
        <Link to={link} >
          <img src="/img/icon/arrowL.svg" alt="arrow" width={20} />
        </Link>
      </div>
      <div className='text-xl'>
        {name}
      </div>
      <div>
        {icon && (
          <div className="cursor-pointer p-2 rounded-lg shadow-[0_2px_10px_1px_rgba(0,0,0,0.3)]">
            <img src={icon} alt="like" width={20} />
          </div>
        )}
      </div>
    </div>
  )
}

export default TopBar