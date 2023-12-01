import React from 'react'

function Card({id,img,category,name,composition,price,addItem}) {
    return (

        <div className="card">
            <div className="cardTop"><img src={img} alt="mehsul" /></div>
            <div className="cardBottom">
                <div className='cardBtn'>
                    <span>{name}</span>
                    <button onClick={addItem} >BUNU SEÇ</button>
                </div>
                <p> {price} <br /> {composition} </p>
            </div>
        </div>
    )
}

export default Card