import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { RiShoppingBasket2Fill } from "react-icons/ri";
function HeaderTop({ sebet, setSebet }) {
  return (
    <div className='container'>
      <div className="headerTop">
        <a href="#" id='logo'><img src="https://www.papajohns.az/img/content/pj_logo_web_new.png" alt="logo" /></a>
        <div className='topMenu'>
          <ul>
            <li><a href="#">Restoranlar</a></li>
            <li><a href="#">PapaBonus</a></li>
          </ul>
        </div>
        <div className="headerLogin">
          <div className='headerIcon'>
            <img id='azFlag' src="https://www.papajohns.az/img/content/flag_az.png" alt="" />
            <p>{window.innerWidth > 768 ? "Azərbaycanca" : "Az"}</p>
          </div>
          <div className='headerIcon'>
            <FaUser className='icon' />
            <p>{window.innerWidth > 768 ? "Giriş /Qeydiyyat" : "Giriş"}</p>
          </div>
          <div className='headerIcon flexCol' onClick={() => { setSebet(!sebet) }}>
            <RiShoppingBasket2Fill className='icon' />
            <p>0M</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop