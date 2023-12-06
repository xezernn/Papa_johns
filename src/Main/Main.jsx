import { useEffect, useState } from "react"
import Cards from "./Cards/Cards"
import MainSelect from "./MainSelect"
import Promo from "./Promo"
import Sebet from "./Sebet/Sebet"
import Product from "./Product"
import { Route, Router, Routes } from "react-router-dom"
import axios from "axios"
import { Col } from "antd"
import TwoElem from "./TwoElem"
import Kompaniya from "./Kompaniya"


function Main({ sebet, setSebet}) {
  const [basket, setBasket] = useState([])

  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get("https://papaapi.yetim.me/food")
    .then(res=> setData(res.data))
  },[])
  
  return (
    <main>
      <div className="container">
        <Routes>
          <Route path="/" element={<Kompaniya />} />
          {/* <Route path="/" element={<TwoElem basket={basket} setBasket={setBasket} data={data} setData={setData}   />}/> */}
          <Route path="/:prop" element={<Cards basket={basket} setBasket={setBasket} data={data} setData={setData} />}/>
          <Route path="/:category/:id" element={<Product data={data} setData={setData} />} />
        </Routes>
        <Sebet sebet={sebet} setSebet={setSebet} basket={basket} setBasket={setBasket} />
   
      </div>

    </main>
  )
}

export default Main