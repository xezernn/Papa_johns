import React from 'react'
import { CiCircleRemove } from "react-icons/ci";

    function SebetItem({ id, img, category, name, composition, price,removeSebet }) {
    return (
        <div className="sebetItem">
            <div className="listLeft"><img src={img} alt="Mehsul Sekili" /></div>
            <div className="listRight">
                <div className='listText'>
                    <h2>{name}</h2>
                    <p>30 sm</p>
                </div>
                <div className="listBtn">
                    <button>+</button>
                    <input type="text" disabled />
                    <button>-</button>
                </div>
                <div className="pul">
                    {price}M
                    <CiCircleRemove onClick={removeSebet} className='removeBtn' />
                </div>
            </div>
        </div>
    )
}

export default SebetItem