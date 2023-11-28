import React from 'react'
import FooterRight from './FooterRight'
import FooterLeft from './FooterLeft'
import FooterBottom from './FooterBottom'
import CopyRig from './CopyRig'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div id='copyElement'>
          <CopyRig  />
        </div>
        <div className='footerLeft'>
          <FooterLeft />
          <FooterRight />
        </div>
        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer