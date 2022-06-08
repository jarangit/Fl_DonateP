import { mockCampaign } from "../mockData/mockCanpaign"

export const getListCampaign = async(type) => {
  const filter = mockCampaign.filter((item) => item.type === type)
  return filter
}