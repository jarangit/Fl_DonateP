import { mockCampaign } from "../mockData/mockCanpaign"

export const getListCampaign = async(type) => {
  const filter = mockCampaign.filter((item) => item.type === type)
  return filter
}
export const getCampaign = async(id) => {
  const filter = mockCampaign.find((item) => item.id === Number(id))
  return filter
}