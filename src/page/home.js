import React from 'react'
import HomeBanner from '../component/banner/homeBanner';
import Tap from '../component/tap/tap';
import SearchInput from '../component/input/searchInput';
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
       <main className="px-3">
        <div className="flex justify-between items-center py-3">
          <div className="font-semibold">Name</div>
          <div>
          <Link to="/profile">
          <img src="/img/avatar.png" alt="" width="48px" />
          </Link>
          </div>
        </div>
        <SearchInput />
        <HomeBanner />
        <Tap />
      </main>
    </div>
  )
}

export default HomePage