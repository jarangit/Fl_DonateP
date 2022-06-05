import React from 'react'
import MobileMenu from './mobileMenu'

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        {children}
      </div>
      <MobileMenu />
    </div>
  )
}

export default Layout