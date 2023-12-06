import React from 'react'
import { Carousel } from 'antd';

function Carusel2({img}) {
    return (
        <Carousel autoplay>
            <div className='sliderH3'>
                <h3><img src={img} alt="mehsul sekili   " /></h3>
            </div>
            <div className='sliderH3'>
                <h3><img src={img} alt="mehsul sekili   " /></h3>
            </div>
            <div className='sliderH3'>
                <h3><img src={img} alt="mehsul sekili   " /></h3>
            </div>
            
        </Carousel>
    )
}

export default Carusel2