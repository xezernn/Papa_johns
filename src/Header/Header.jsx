import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'

function Header({sebet, setSebet, basket, say}) {

    return (
        <header>
            <HeaderTop sebet={sebet} setSebet={setSebet}  basket ={basket} say={say}/> 
            <HeaderBottom  />
        </header>
    )
}

export default Header