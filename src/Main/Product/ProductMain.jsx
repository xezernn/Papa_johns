import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Carusel2 from '../../AntD/Carusel2'
import { Select, Space } from 'antd';
function ProductMain({ id, img, price, name, category, composition, addSbtProdct, categoryUrl }) {
    const [priceSize, setPriceSize] = useState()
    const urlNav =  useNavigate()

    function navUrl ( ){
        urlNav(`/menu/${categoryUrl}`)
    }
    
    
    function handleSize(e) {
        setPriceSize(e)
    }

    useEffect(()=>{
        if(typeof(price)=== "number"){
            setPriceSize(price)
        }
        else{
            setPriceSize(price.xs)
        }
    },[])


    return (
        <>
            <div className="productTopBar">
                <ul id='productMenu'>
                    <li><Link to={"#"} onClick={navUrl} >{categoryUrl}</Link></li>
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
                    <h2>Məhsulun qiyməti: <span className='qiymet'>{priceSize} azn</span></h2>
                    <h3>{name}</h3>
                    <span>Çatdırılma: Var</span>

                    <div className="mehsulHaaqinda">
                        <p><b>Filial:</b> Baki</p>
                        <p><b>Məhsulun Kateqoriyasi:</b> {category}</p>
                        <p><b>Məhsulun Tərkibi:</b> {composition}</p>

                    </div>
                    <div className='addBtn'>
                        {
                            typeof(price)==="number" ? 
                            "Yalniz tək ölçüdə təqdim olunur!"
                            :
                            <p > 
                                Məhsulun ölçüsünü təyin edin:
                                <Select
                                defaultValue={price.xs}
                                style={{ width: 65 }}
                                onChange={handleSize}
                                options={[
                                    { value: price.xs , label: price.xs},
                                    { value: price.sm , label: price.sm},
                                    { value: price.md , label: price.md},
                                    { value: price.lg , label: price.lg},
                                ]}
                            />
                            </p>
                        } 
                    <button onClick={() => { addSbtProdct(priceSize) }}>Səbətə əlavə et</button>
                </div>
            </div>
        </div >

        </>
    )
}

export default ProductMain