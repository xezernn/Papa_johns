import React from 'react'
import { Carousel } from 'antd';

function Carusel2({data,setData}) {
    console.log(data);
    return (
        <Carousel autoplay>
            <div className='sliderH3'>
                <h3><img src={data[1].img} alt="" /></h3>
            </div>
            <div className='sliderH3'>
                <h3><img src={data[2].img} alt="" /></h3>
            </div>
            <div className='sliderH3'>
                <h3><img src={data[3].img} alt="" /></h3>
            </div>
            
        </Carousel>
    )
}

export default Carusel2