import React from 'react'
import Promo from './Promo'
import MainSelect from './MainSelect'
import Cards from './Cards/Cards'

function TwoElem({basket ,setBasket ,data ,setData}) {
    return (
        <>
            <Promo />
            <MainSelect />
            <Cards basket={basket} setBasket={setBasket} data={data} setData={setData} />
        </>
    )
}

export default TwoElem