import React, { useState } from 'react'
import Carusel2 from '../../AntD/Carusel2'
import { Link, useParams } from 'react-router-dom'
import ProductMain from './ProductMain'

function Product({ data, setData, basket, setBasket }) {
  const { category, id } = useParams()
  let mehsul = (data.filter(item => item.id === +id && item.category === category))

  const addSbtProdct = (name)=>{
    let yeni = data.find(item => item.name === name)
    setBasket([...basket, yeni])
  }
  



  return (
    <div className='productMain'>
      {
        mehsul?.map(item => <ProductMain key={item.id} {...item} addSbtProdct={()=>{addSbtProdct(item.name)}} categoryUrl={category} />)
      }
    </div>
  )
}

export default Product