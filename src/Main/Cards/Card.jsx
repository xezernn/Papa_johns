import React from 'react'
import { Link } from 'react-router-dom'

function Card({ id, img, category, name, composition, price, addItem }) {

    return (
        <div className="card">
            <Link className='cardText' to={`/${category}/${id}`}>
                <div className="cardTop"><img src={img} alt="mehsul" /></div>
            </Link>
            <div className="cardBottom">
                <div className='cardBtn'>
                    <Link className='cardText' to={`/${category}/${id}`}> <span>{name}</span> </Link>
                    <button onClick={addItem} >BUNU SEÇ</button>
                </div>
                <Link className='cardText' to={`/${category}/${id}`}><p> {composition} </p> </Link>
            </div>
        </div>
    )
}

export default Card