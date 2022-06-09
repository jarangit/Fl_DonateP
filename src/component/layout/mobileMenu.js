import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useLocation } from "react-router-dom";
const MobileMenu = () => {
  let { pathname } = useLocation();
  return (
   <>
    <div className=' fixed bottom-0 z-40 w-full h-[56px] p-3 px-10 rounded-t-[20px] shadow-[0_25px_70px_1px_rgba(0,0,0,0.5)] bg-$white' >
      <ul className='flex gap-3 justify-between items-center mt-2'>
        <li>
          <Link to={"/"}>
            {pathname === "/" ?
              (
                <img src={'/img/icon/homeOr.svg'} alt={""} />
              ) : (
                <img src={'/img/icon/home.svg'} alt={""} />
              )
            }
          </Link>
        </li>
        <li>
          <Link to={"/campaigns"}>
            {pathname === "/campaign" ?
              (
                <img src={'/img/icon/noteOr.svg'} alt={""} />
              ) : (
                <img src={'/img/icon/note.svg'} alt={""} />
              )
            }         
             </Link>
        </li>
        <li>
          <Link to={"/history"}>
            {pathname === "/history" ?
              (
                <img src={'/img/icon/listOr.svg'} alt={""} />
              ) : (
                <img src={'/img/icon/list.svg'} alt={""} />
              )
            }          
            </Link>
        </li>
        <li>
          <Link to={"/favorite"}>
            {pathname === "/favorite" ?
              (
                <img src={'/img/icon/favoriteOr.svg'} alt={""} />
              ) : (
                <img src={'/img/icon/favorite.svg'} alt={""} />
              )
            }          
            </Link>
        </li>
      </ul>
    </div>
    <Outlet/>
   </>
  )
}

export default MobileMenu