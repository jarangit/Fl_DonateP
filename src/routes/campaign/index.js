import React from 'react'
import { Outlet } from 'react-router-dom'
import CreateCampaignForm from '../../component/form/createCampaignForm'
import TopBar from '../../component/layout/topBar'
const CampaignPage = () => {
  return (
    <>
      <div className="animate-fade-in-down p-5">
        <TopBar
          name="Create Campaign"
          link={`/`}
          // icon={`/img/icon/pencil.svg`}
        />
        <CreateCampaignForm />
      </div>
      <Outlet />
    </>
  )
}

export default CampaignPage