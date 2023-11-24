import React from 'react'

function Card() {
    return (
        <div className="card">
            <div className="cardTop"><img src="https://www.papajohns.az/uploads/images/chicken_parmesan_item.jpg" alt="mehsul" /></div>
            <div className="cardBottom">
                <div className='cardBtn'>
                    <span>Çiken Parmezan</span>
                    <button>BUNU SEÇ</button>
                </div>
                <p>
                    Pizza sousu, Çiken Poppersləri, Sarımsaqlı parmesan sousu, Göbələk, İtalyan Ədviyyatları, Mozzarella
                </p>
            </div>
        </div>
    )
}

export default Card