import React from 'react'
import Carusel2 from '../AntD/Carusel2'
import { Link, useParams } from 'react-router-dom'

function Product({ data, setData }) {
  const {url,id} = useParams()

  return (
    <div className='productMain'>
      <div className="productTopBar">
        <ul id='productMenu'>
          <li><Link to="/">Mehsullar</Link></li>
          <li><Link>{data[id-1].name}</Link></li>

        </ul>
      </div>
      <div className='productFlex1'>
        <div className="productLeft">
          <div className="coruselDesk">
            <img src={data[id-1].img} alt="" />
          </div>
          <div className='caruselDnone'>
            <Carusel2 data={data} setData={setData} />
          </div>
        </div>
        <div className="productRight">
          <h2>Məhsulun qiyməti: <span className='qiymet'>{data[id-1].price} azn</span></h2>
          <h3>{data[id-1].name}</h3>
          <span>Çatdırılma: Var</span>

          <div className="mehsulHaaqinda">
            <p><b>Filial:</b> Baki</p>
            <p><b>Məhsulun Kateqoriyasi:</b> {data[id-1].category}</p>
            <p><b>Məhsulun Tərkibi:</b> {data[id-1].composition}</p>

          </div>
          <div className='addBtn'>
            <p>Şəhər: Baki</p>
            <button>Səbətə əlavə et</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product