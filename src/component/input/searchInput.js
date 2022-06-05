import React from 'react'
import { BiSearch } from 'react-icons/bi'
const SearchInput = () => {
  return (
    <div className="flex gap-2 w-full justify-between mt-2">
      <div className="w-full">
        <input type="text" placeholder="Search" className="bg-$gray-light p-2 rounded-lg w-full" />
      </div>
      <div>
        <button className="bg-$orange  rounded-lg text-$white h-full w-[40px] text-center flex justify-center items-center">
          <BiSearch size={30} />
        </button>
      </div>
    </div>
  )
}

export default SearchInput