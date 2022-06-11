import React from 'react'
import MobileMenu from './mobileMenu'

const Layout = ({ children }) => {
  return (
    <div>
      <div className="mb-28 ">
        {children}
      </div>
      <MobileMenu />
    </div>
  )
}

export default Layout