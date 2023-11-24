import React from 'react'
import FooterRight from './FooterRight'
import FooterLeft from './FooterLeft'

function Footer() {
  return (
    <footer>
        <div className="container">
            <FooterLeft/>
            <FooterRight/>
        </div>
    </footer>
  )
}

export default Footer