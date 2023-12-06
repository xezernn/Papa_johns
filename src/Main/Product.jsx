import React, { useState } from 'react'
import Carusel2 from '../AntD/Carusel2'
import { Link, useParams } from 'react-router-dom'
import ProductMain from './ProductMain'

function Product({ data, setData }) {
  const { category, id } = useParams()
  let mehsul = (data.filter(item => item.id === +id && item.category === category))
console.log(mehsul);
  return (
    <div className='productMain'>
      {
        mehsul?.map(item => <ProductMain key={item.id} {...item} />)
      }
    </div>
  )
}

export default Product