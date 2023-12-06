import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import SebetItem from './SebetItem';
function Sebet({ sebet, setSebet, basket, setBasket }) {

    function removeSbt(name){
        setBasket(basket.filter(item => item.name !== name ))
    }

    return (
        <div className='sebet' style={{ display: sebet ? "none" : "block" }}>
            <CiCircleRemove className='yasamen' onClick={() => { setSebet(!sebet) }} />
            <div className='items'>
                {basket.map((item, i) => (
                    <SebetItem key={item.id} {...item} removeSebet={()=>{removeSbt(item.name)}} />
                ))}

            </div>
            <div className="sebetText">
                <h3>Ümumi Məbləğ</h3>
                <button className='sebetBtn'>Sifarişi göndər</button>
            </div>
        </div>
    )
}

export default Sebet