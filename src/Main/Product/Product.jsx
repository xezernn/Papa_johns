import React, { useState } from 'react'
import Carusel2 from '../../AntD/Carusel2'
import { Link, useParams } from 'react-router-dom'
import ProductMain from './ProductMain'

function Product({ data, setData, basket, setBasket }) {

  const { category, id} = useParams()
  console.log(category);


  let mehsul = (data.filter(item => item.id === +id && item.category === category))

  const addSbtProdct = (name, size)=>{
    let newItem = data.find(item => item.name === name);
    newItem.price = size
    const index = basket.findIndex(item => item.name === name);
    if (index === -1) {
      setBasket([...basket, { ...newItem, count: 1 }]);
    } else {
      setBasket(prevBasket => {
        const updatedBasket = [...prevBasket];
        updatedBasket[index] = { ...updatedBasket[index], count: updatedBasket[index].count + 1 };
        return updatedBasket;
      });
    }
  }
  
  



  return (
    <div className='productMain'>
      {
        mehsul?.map(item => <ProductMain key={item.id} {...item} addSbtProdct={(size)=>{addSbtProdct(item.name, size)}} categoryUrl={category} />)
      }
    </div>
  )
}

export default Product