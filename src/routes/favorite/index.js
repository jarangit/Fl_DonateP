import React, { useState } from 'react'
import TopBar from '../../component/layout/topBar'
import TapNavItem from '../../component/tap/tapNavItem'
import TapContent from '../../component/tap/tapContent'
import ListFavorite from '../../component/favorite/listFavorite'

const FavoritePage = () => {
  const [activeTap, setActiveTap] = useState("tap1")

  return (
    <div className="animate-fade-in-down">
      <div className='mainBoxShadow p-3'>
        <TopBar
          name="Favorite"
          link={`/`}
        />
        <ul className='flex gap-5 mt-10 h-10 items-center'>
          <TapNavItem
            id="tap1"
            activeTab={activeTap}
            setActiveTab={setActiveTap}
            title="รายการบริจาค"
          />
          <TapNavItem
            id="tap2"
            activeTab={activeTap}
            setActiveTab={setActiveTap}
            title="รายการที่โหวต"
          />
        </ul>
      </div>

      <div>
        <TapContent
          id="tap1"
          activeTab={activeTap}
        >
         <ListFavorite/>
        </TapContent>
        <TapContent
          id="tap2"
          activeTab={activeTap}
        >
         <ListFavorite/>
        </TapContent>
      </div>
    </div>)
}

export default FavoritePage