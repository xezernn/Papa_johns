import React from 'react'
import { Link } from 'react-router-dom'
import Carusel2 from '../../AntD/Carusel2'

function ProductMain({ id, img, name, price, category, composition, addSbtProdct  }) {
    


    return (
        <>
            <div className="productTopBar">
                <ul id='productMenu'>
                    <li><Link to="/">Mehsullar</Link></li>
                    <li><Link>{name}</Link></li>

                </ul>
            </div>
            <div className='productFlex1'>
                <div className="productLeft">
                    <div className="coruselDesk">
                        <img src={img} alt="" />
                    </div>
                    <div className='caruselDnone'>
                        <Carusel2 img={img} />
                    </div>
                </div>
                <div className="productRight">
                    <h2>Məhsulun qiyməti: <span className='qiymet'>{price} azn</span></h2>
                    <h3>{name}</h3>
                    <span>Çatdırılma: Var</span>

                    <div className="mehsulHaaqinda">
                        <p><b>Filial:</b> Baki</p>
                        <p><b>Məhsulun Kateqoriyasi:</b> {category}</p>
                        <p><b>Məhsulun Tərkibi:</b> {composition}</p>

                    </div>
                    <div className='addBtn'>
                        <p>Şəhər: Baki</p>
                        <button onClick={addSbtProdct}>Səbətə əlavə et</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductMain