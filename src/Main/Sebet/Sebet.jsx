import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import SebetItem from './SebetItem';
function Sebet({ sebet, setSebet, basket, setBasket }) {
    return (
        <div className='sebet' style={{ display: sebet ? "none" : "block" }}>
            <CiCircleRemove className='yasamen' onClick={() => { setSebet(!sebet) }} />
            <div className='items'>
                {basket.map((item, i) => (
                    <SebetItem key={i} {...item} />
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