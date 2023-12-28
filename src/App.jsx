import { useEffect, useState } from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Main from "./Main/Main"
import axios from "axios"
import { Alert, Space } from 'antd';
import Sebet from "./Main/Sebet/Sebet"


function App() {
  const [sebet, setSebet] = useState(true) //basketi aciq baglamaq ucun
  const [basket, setBasket] = useState([])  //basketin icine ne ise elave etmek ucun 
  const [basketCount, setBasketCount] = useState(0)
  const [err, setErr] = useState("")
  const [data, setData] = useState([])
  const [say, setSay] = useState(0);  // basket umumi meblegi hesablayir 
  useEffect(() => {
    axios.get("https://papaapi.yetim.me/food")
      .then(res => setData(res.data))
      .catch(err => setErr(err))
  }, [])

  useEffect(() => {
    fetch('http://localhost:7000/sifaris', {
      method: 'POST',
      body: JSON.stringify({...basket}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).catch(err=> console.log(err))
  }, [basket])


  useEffect(() => { //basket umimu mebkegi hesablayir
    let totalAmount = 0;
    basket.forEach(item => {
      totalAmount += item.count * item.price;
    });
    setSay(totalAmount);
  }, [basket]);


  return (
    err === "" ?
      <div className="App">
        <Header sebet={sebet} setSebet={setSebet} basket={basket} say={say} />
        <Main basket={basket} setBasket={setBasket} data={data} setData={setData} say={say} />
        <Footer />
        <Sebet sebet={sebet} setSebet={setSebet} basket={basket} setBasket={setBasket} say={say} />

      </div>
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