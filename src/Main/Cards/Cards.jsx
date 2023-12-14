import { useParams } from "react-router-dom"
import Card from "./Card"
import { nanoid } from "nanoid";
import Promo from "../Main Top Bar/Promo";
import MainSelect from "../Main Top Bar/MainSelect";

function Cards({ basket, setBasket, data, setData }) {

  const { prop, url } = useParams()
  function addBasket(name) {
    let newItem = data.find(item => item.name === name)
    setBasket([...basket, newItem])
  }

  return (
    <>
      <Promo />
      {prop === "Pizzalar" && <MainSelect /> }
      <div className="cards">
        {
          data.filter(item => item.category == prop).map(item => <Card
            key={nanoid()}
            {...item}
            addItem = {()=>{addBasket(item.name)}}
          />
          )
        }
      </div>
    </>
  )
}

export default Cards