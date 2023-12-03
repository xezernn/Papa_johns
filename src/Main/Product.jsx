import React from 'react'
import Carusel2 from '../AntD/Carusel2'

function Product({ data, setData }) {
  return (
    <div className='productMain'>
      <div className="productTopBar">
        <ul id='productMenu'>
          <li><a href="#">Salonlar</a></li>
          <li><a href="#">AvtoSalon</a></li>
          <li><a href="#">Vip Motors</a></li>
          <li><a href="#">Toyota</a></li>
          <li><a href="#">Highlander</a></li>
        </ul>
      </div>
      <div className='productFlex1'>
        <div className="productLeft">
          <div className="coruselDesk">
            <img src={data[1].img} alt="" />
          </div>
          <div className='caruselDnone'>
            <Carusel2 data={data} setData={setData} />
          </div>
        </div>
        <div className="productRight">
          <h2>Məhsulun qiyməti: <span className='qiymet'>65000$</span></h2>
          <h3>Toyota Highlander, 2.5 L, 2023 il, yeni</h3>
          <span>Barter: Var</span>

          <div className="mehsulHaaqinda">
            <p><b>Filial:</b> Baki</p>
            <p><b>Məhsulun Kateqoriyasi:</b> Pizza</p>
            <p><b>Məhsulun Tərkibi:</b> dxgfchjkhgfcvhbjk</p>

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