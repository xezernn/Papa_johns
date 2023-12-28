import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import SebetItem from './SebetItem';
function Sebet({ sebet, setSebet, basket, setBasket, say }) {

    function removeSbt(name) {
        setBasket(basket.filter(item => item.name !== name))         
    }

    function addCount(name, x) {
        const deyis = basket.find(item => item.name === name);        
        if (deyis) {
            const selectedIndex = basket.findIndex(item => item.name === name);
            
            const updatedBasket = [...basket];
            updatedBasket[selectedIndex] = { ...deyis, count: deyis.count + x };
            
            setBasket(updatedBasket);
        }
        if (deyis.count ===   0) {removeSbt(name);}

    }

    return (
        <div className='sebet' style={{ right: !sebet ? "0px" : "-100%", position: "fixed" }}>
            <CiCircleRemove className='yasamen' onClick={() => { setSebet(!sebet) }} />
            <div className='items'>
                {basket.map(item => (
                    <SebetItem key={item.id} {...item} removeSebet={() => { removeSbt(item.name) }} addCount={(x) => { addCount(item.name, x) }}  />
                ))}
            </div>
            <div className='sebetBottom'>
                <h3>Ümumi Məbləğ : <span className='umumiMebleg'>{say}</span></h3>
                <div className="sebetBtns">
                    <button className='sebetBtn' onClick={()=>{setBasket([])}} >Səbəti Təmizlə</button>
                    <button className='sebetBtn'>Sifarişi göndər</button>
                </div>
            </div>
        </div>
    )
}

export default Sebet