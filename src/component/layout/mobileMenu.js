import React from 'react'

const MobileMenu = () => {
  return (
    <div className=' fixed bottom-0 z-40 w-full h-[56px] p-3 px-10 rounded-t-[20px] shadow-[0_25px_70px_1px_rgba(0,0,0,0.5)] bg-$white' >
      <ul className='flex gap-3 justify-between'>
        <li>
          <img src={'/img/icon/home.svg'} alt={""} />
        </li>
        <li>
          <img src={'/img/icon/note.svg'} alt={""} />
        </li>
        <li>
          <img src={'/img/icon/list.svg'} alt={""} />
        </li>
        <li>
          <img src={'/img/icon/favorite.svg'} alt={""} />
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu