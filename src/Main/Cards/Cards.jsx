import { useParams } from "react-router-dom"
import Card from "./Card"
import { useEffect, useState } from "react";
import axios from "axios";

function Cards({ basket, setBasket }) {

  const [propdata, setPropdata]=useState([])
  const {prop} = useParams()
  console.log(prop);

  useEffect(()=>{
    axios.get("https://raw.githubusercontent.com/xezernn/papaApi/main/data.json")
    .then(res=> {setPropdata(res.data[0]), console.log(propdata)})
  },[prop])

  function addBasket(id) {
    let newItem = data.find(item => item.id === id)
    setBasket([...basket, newItem])
  }

  return (
    <div className="cards">

      {
        propdata.prop.map(item => <Card
          key={item.id}
          {...item}
          addItem={() => { addBasket(item.id) }}
        />
        )
      }
      {
        console.log(propdata)
      }
    </div>
  )
}

export default Cards