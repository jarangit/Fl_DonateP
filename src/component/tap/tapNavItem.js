import React from 'react'

const TapNavItem = ({ title, id, activeTab, setActiveTab }) => {

  const handleClick = () => {
    setActiveTab(id)
  }

  return (
    <li
      onClick={handleClick}
      className={`
      px-2 py-1 cursor-pointer text-sm
      ${activeTab === id ? 'text-$orange bg-$gray-light rounded-lg' : 'text-black'}
      `}
    >
      {title}
    </li>
  )
}

export default TapNavItem