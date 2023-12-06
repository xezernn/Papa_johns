import { useParams } from "react-router-dom"
import Card from "./Card"
import { nanoid } from "nanoid";
import Promo from "../Promo";
import MainSelect from "../MainSelect";

function Cards({ basket, setBasket, data, setData }) {

  const { prop } = useParams()

  function addBasket(id) {
    let newItem = data.find(item => item.id === id)
    setBasket([...basket, newItem])
  }

  return (
    <>
      <Promo />
      {prop === "Pizzalar" ? <MainSelect /> : ""}
    

      <div className="cards">

        {

          // data?.[prop]?.map(item => <Card
          data.filter(item => item.category == prop).map(item => <Card
            key={nanoid()}
            {...item}
          />
          )
        }
      </div>
    </>
  )
}

export default Cards