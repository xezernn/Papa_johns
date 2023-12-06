import { useParams } from "react-router-dom"
import Card from "./Card"
import { nanoid } from "nanoid";
import MainSelect from "../MainSelect";
import Promo from "../Promo";

function Cards({ basket, setBasket, data, setData }) {

  const { prop } = useParams()

  function addBasket(id) {
    let newItem = data.find(item => item.id === id)
    setBasket([...basket, newItem])
  }

  return (
    <>
      {prop != undefined ? <Promo/> :""}

      <div className="cards">

        {
          data?.[prop]?.map(item => <Card
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