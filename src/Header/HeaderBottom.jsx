import React from 'react'
import { FaQuestion } from "react-icons/fa";
import {Link} from "react-router-dom"
function HeaderBottom() {
  return (
    <div className='headerRed'>
      <div className="container">
        <div id='redBar'>
          <Link to="/" id='redLogo'><img src="https://www.papajohns.az/img/content/pj_logo_web_new.png" alt="logo" /></Link>
          <ul id='menuList'>
            <li><Link to="/">Kampaniyalar</Link></li>
            <li>
              <Link to="/">Papadias</Link>
            </li>
            <li className="active">
              <Link to="/">Pizza</Link>
            </li>
            <li>
              <Link to="/">Qəlyanaltı</Link>
            </li>
            <li>
              <Link to="/">Salat</Link>
            </li>
            <li>
              <Link to="/">Pasta</Link>
            </li>
            <li>
              <Link to="/">İçki</Link>
            </li>
            <li>
              <Link to="/">Desert</Link>
            </li>
            <li>
              <Link to='/'>Sous</Link>
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