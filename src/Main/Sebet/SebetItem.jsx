import React from 'react'
import { CiCircleRemove } from "react-icons/ci";

function SebetItem({ id, img, category, name, composition, price, count, removeSebet, addCount }) {


    return (
        <div className="sebetItem">
            <div className="listLeft"><img src={img} alt="Mehsul Sekili" /></div>
            <div className="listRight">
                <div className='listText'>
                    <h2>{name}</h2>
                    <br />
                    <p>Ölçüsü: 24sm </p>
                    <p className='pul'>
                        Qiyməti: {price} ₼
                    </p>
                </div>
                <div className="listBtn">
                    <button onClick={() => { addCount(1) }}>+</button>
                    <input type="text" value={count} disabled />
                    <button onClick={() => { addCount(-1) }} >-</button>

                </div>
                <CiCircleRemove onClick={removeSebet} className='removeBtn' />
            </div>
        </div>
    )
}

export default SebetItem