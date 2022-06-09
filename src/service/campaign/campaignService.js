import { mockCampaign } from "../mockData/mockCanpaign"

export const getListCampaign = async(type) => {
  const filter = mockCampaign.filter((item) => item.type === type)
  return filter
}
export const getCampaign = async(id) => {
  const filter = mockCampaign.find((item) => item.id === Number(id))
  console.log('%cMyProject%cline:8%cfilter', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(237, 222, 139);padding:3px;border-radius:2px', filter)
  return filter
}