import React from 'react'
import { Link } from 'react-router-dom'

function Card({ id, img, category, name, composition, price, addItem }) {
    return (

        <div className="card">
            <Link className='cardText' to={`/product/${id}`}>
                <div className="cardTop"><img src={img} alt="mehsul" /></div>
                <div className="cardBottom">
                    <div className='cardBtn'>
                        <span   >{name}</span>
                        <button onClick={addItem} >BUNU SEÇ</button>
                    </div>
                    <p> {composition} </p>
                </div>
            </Link>
        </div>
    )
}

export default Card