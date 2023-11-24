import React from 'react'
import { FaQuestion } from "react-icons/fa";

function HeaderBottom() {
  return (
    <div className='headerRed'>
      <div className="container">
        <div id='redBar'>
          <a href="#" id='redLogo'><img src="https://www.papajohns.az/img/content/pj_logo_web_new.png" alt="logo" /></a>
          <ul id='menuList'>
            <li><a href="#">Kampaniyalar</a></li>
            <li>
              <a href="#">Papadias</a>
            </li>
            <li className="active">
              <a href="#">Pizza</a>
            </li>
            <li>
              <a href="#">Qəlyanaltı</a>
            </li>
            <li>
              <a href="#">Salat</a>
            </li>
            <li>
              <a href="#">Pasta</a>
            </li>
            <li>
              <a href="#">İçki</a>
            </li>
            <li>
              <a href="#">Desert</a>
            </li>
            <li>
              <a href="">Sous</a>
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