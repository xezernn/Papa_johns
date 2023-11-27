import { useState } from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Main from "./Main/Main"

function App() {
  const [sebet, setSebet] = useState(false)

  return (
    <>
      <Header sebet={sebet} setSebet={setSebet} />
      <Main sebet={sebet} setSebet={setSebet} />
      <Footer />
    </>
  )
}

export default App