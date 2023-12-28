import Cards from "./Cards/Cards"
import Sebet from "./Sebet/Sebet"
import Product from "./Product/Product"
import { Route, Router, Routes, useNavigate } from "react-router-dom"
import axios from "axios"
import Kompaniya from "./Kompaniya/Kompaniya"
import Error404 from "./Error404"
import { useEffect } from "react"



function Main({ basket, setBasket,data, setData }) {

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/menu/Pizzalar");
  }, []);

  return (
      <main>
        <div className="container">
          <Routes>
            {/* <Route path="/" element={<Cards basket={basket} setBasket={setBasket} data={data} setData={setData} />} /> */}
            <Route path="/" element={<Kompaniya />} />
            <Route path="/menu/:prop" element={<Cards basket={basket} setBasket={setBasket} data={data} setData={setData} />} />
            <Route path="/menu/:category/:id" element={<Product data={data} setData={setData} basket={basket} setBasket={setBasket} />} />
            <Route path="*/*/*" element={<Error404 />} />
          </Routes>
    
        </div>
      </main>
  )
}

export default Main