import { useState } from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Main from "./Main/Main"
  
function App() {
  const [sebet, setSebet] = useState(true)
  const [basket, setBasket] = useState([])
  const [basketCount, setBasketCount] = useState(0)

  return (
    <>
        <Header sebet={sebet} setSebet={setSebet} />
        <Main sebet={sebet} setSebet={setSebet} basket = {basket} setBasket={setBasket} />
        <Footer />
    </>
  )
}

export default App