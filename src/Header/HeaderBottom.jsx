import React from 'react'
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom"
function HeaderBottom() {
  return (
    <div className='headerRed'>
      <div className="container">
        <div id='redBar'>
          <Link to="/" id='redLogo'><img src="https://www.papajohns.az/img/content/pj_logo_web_new.png" alt="logo" /></Link>
          <ul id='menuList'>
            <li><Link to="/">Kampaniyalar</Link></li>
            <li>
              <Link to="/Papadias">Papadias</Link>
            </li>
            <li className="active">
              <Link to="/Pizzalar">Pizza</Link>
            </li>
            <li>
              <Link to="/Qəlyanaltılar">Qəlyanaltı</Link>
            </li>
            <li>
              <Link to="/Salatlar">Salat</Link>
            </li>
            <li>
              <Link to="/Pastalar">Pasta</Link>
            </li>
            <li>
              <Link to="/İçkilər">İçki</Link>
            </li>
            <li>
              <Link to="/Desserts">Desert</Link>
            </li>
            <li>
              <Link to='/Souslar'>Sous</Link>
            </li>
          </ul>
          <span id='bal'>
            0 Bal
            <FaQuestion />
          </span>
        </div>
      </div>
    </div>
  )
}

export default HeaderBottom