import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import logo from '../assets/img/logo.png'

function HeaderTop({ sebet, setSebet }) {
  return (
    <div className='container'>
      <div className="headerTop">
        <a href="#" id='logo'><img src={logo} alt="logo" /></a>
        <div className='topMenu'>
          <ul>
            <li><a href="#">Restoranlar</a></li>
            <li><a href="#">PapaBonus</a></li>
          </ul>
        </div>
        <div className="headerLogin">
          <div className='headerIcon'>
            <img id='azFlag' src="https://www.papajohns.az/img/content/flag_az.png" alt="" />
            <p className='textMobil'>Az</p>
            <p className='textDesk'>Azərbaycanca</p>
          </div>
          <div className='headerIcon'>
            <FaUser className='icon' />
            <p className='textMobil'>Giriş</p>
            <p className='textDesk'>Giriş /Qeydiyyat</p>
          </div>
          <div className='headerIcon flexCol' onClick={() => { setSebet(!sebet) }}>
            <RiShoppingBasket2Fill className='icon' />
            <p>0₼</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop