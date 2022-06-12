import React from 'react'
const typeCampaign = [
  {
    name: 'โควิด-19',
    value: "covid"
  },
  {
    name: 'เด็กและเยาวชน',
    value: "young"
  },
  {
    name: 'ผู้สูงอายุ',
    value: "old"
  },
  {
    name: 'ภัยพิบัติ',
    value: "disaster"
  },
  {
    name: 'สิ่งแวดล้อม',
    value: "environment"
  },
  {
    name: 'สัตว์',
    value: "animal"
  },
]
const TypeCampaignInput = ({ value, onChange }) => {
  return (
    <div className=' grid grid-cols-2 gap-2 mt-2 text-sm'>
      {typeCampaign.map((item, key) => (
        <div key={key}>
          <input type="radio" id={key} name={"typeCampaign"} value={item.value} onChange={onChange} />
          <label htmlFor={item.value} className = "ml-2">{item.name}</label>
        </div>
      ))}
    </div>
  )
}

export default TypeCampaignInput