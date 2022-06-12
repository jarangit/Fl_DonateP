import React from 'react'

const TapContent = ({ id, activeTab, children }) => {
  return activeTab === id ? <div className='p-3 mt-3'>{children}</div> : null
}

export default TapContent