import { useEffect, useState } from "react"
import Cards from "./Cards/Cards"
import Sebet from "./Sebet/Sebet"
import Product from "./Product/Product"
import { Route, Router, Routes } from "react-router-dom"
import axios from "axios"
  import Kompaniya from "./Kompaniya"
import Error404 from "./Error404"


function Main({ sebet, setSebet, basket, setBasket}) {
  

  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get("https://papaapi.yetim.me/food")
    .then(res=> setData(res.data))
  },[])
  
  function goo(){
    console.log("sasasss");
  }


  return (
    <main>
      <div className="container">
        <Routes>
          <Route path="/menu" element={<Kompaniya />} />
          <Route path="/menu/:prop" element={<Cards basket={basket} setBasket={setBasket} data={data} setData={setData} />}/>
          <Route path="/menu/:category/:id" element={<Product data={data} setData={setData} basket={basket} setBasket={setBasket}   />} />
          <Route path="*" element={<Error404/>} />
        </Routes>
        <Sebet sebet={sebet} setSebet={setSebet} basket={basket} setBasket={setBasket} />
   
      </div>

    </main>
  )
}

export default Main