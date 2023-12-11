import { useParams } from "react-router-dom"
import Card from "./Card"
import { nanoid } from "nanoid";
import Promo from "../Main Top Bar/Promo";
import MainSelect from "../Main Top Bar/MainSelect";

function Cards({ basket, setBasket, data, setData }) {

  const { prop, url } = useParams()
  console.log(prop);
  function addBasket(id,category) {
    let newItem = data.find(item => item.id === id && item.category === category)
    setBasket([...basket, newItem])
  }

  return (
    <>
      <Promo />
      {prop === "Pizzalar" && <MainSelect /> }
      <div className="cards">
        {
          // data?.[prop]?.map(item => <Card
          data.filter(item => item.category == prop).map(item => <Card
            key={nanoid()}
            {...item}
            addItem = {()=>{addBasket(item.id, item.category)}}
          />
          )
        }
      </div>
    </>
  )
}

export default Cards