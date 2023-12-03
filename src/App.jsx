import { useState } from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Main from "./Main/Main"
import { BrowserRouter } from "react-router-dom"
import Outlet from "./Outlet"

function App() {
  const [sebet, setSebet] = useState(true)

  return (
    <>
      <BrowserRouter>
        <Header sebet={sebet} setSebet={setSebet} />
        <Outlet sebet={sebet} setSebet={setSebet} />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App