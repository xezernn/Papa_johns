import React from 'react'
import CopyRig from './CopyRig'
import { FaFacebookF, FaTwitter,FaInstagram,FaTripadvisor } from "react-icons/fa";

function FooterBottom() {
  return (
    <div className="footerBottom">
      <div className="footerIcons">
        <a href="tel:+99470923313"><img src="	https://www.papajohns.az/img/content/footer-images-az-AZ.png" alt="tel" /></a>
      </div>
      <div className="socialIcons">
        <ul id='socialMenu'>
          <li>
            <a href="https://www.facebook.com/papajohns.az/"><FaFacebookF /></a>
          </li>
          <li>
            <a href="https://twitter.com/azpapajohns"><FaTwitter /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/azpapajohns/"><FaInstagram /></a>
          </li>
          <li>
            <a href='#'><FaTripadvisor /></a>
          </li>
        </ul>
      </div>
      <CopyRig />
    </div>

  )
}

export default FooterBottom