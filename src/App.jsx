import { useEffect, useState } from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Main from "./Main/Main"
import axios from "axios"
import { Alert, Space } from 'antd';


function App() {
  const [sebet, setSebet] = useState(true)
  const [basket, setBasket] = useState([])
  const [basketCount, setBasketCount] = useState(0)
  const [err, setErr] = useState("")
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://papaapi.yetim.me/food")
      .then(res => setData(res.data))
      .catch(err => setErr(err))
  }, [])


  return (
    err === "" ?
      <>
        <Header sebet={sebet} setSebet={setSebet} />
        <Main sebet={sebet} setSebet={setSebet} basket={basket} setBasket={setBasket} data={data} setData={setData} />
        <Footer />
      </> 
      :
      <div className="error">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Alert
            message="Error"
            description={err.message}
            type="error"
            showIcon
          />
        </Space>
      </div>
  )
}

export default App