import React from 'react'
import { Outlet } from 'react-router-dom'

const CampaignPage = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-3xl">Campaign Is Coming Soon</div>
      </div>
      <Outlet />
    </>
  )
}

export default CampaignPage