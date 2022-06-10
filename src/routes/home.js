import React, { useEffect, useState } from 'react'
import HomeBanner from '../component/banner/homeBanner';
import Tap from '../component/tap/tap';
import SearchInput from '../component/input/searchInput';
import { Link } from "react-router-dom";
import Loading from '../component/loading/loading';
const HomePage = () => {
  const [loading, setLoading] = useState(false)

useEffect(() => {
  setLoading(true)

  setTimeout(() => {
    setLoading(false)
  }, 300);
}, [])

  return (
    <div>
      {loading ? (
          <Loading />
      ) : (
        <main className="px-3 animate-fade-in-down">
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
      )}
    </div>
  )
}

export default HomePage