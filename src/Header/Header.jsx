import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'

function Header({sebet, setSebet}) {

    return (
        <header>
            <HeaderTop sebet={sebet} setSebet={setSebet} />
            <HeaderBottom  />
        </header>
    )
}

export default Header