import { useParams } from "react-router-dom"
import Card from "./Card"

function Cards({ basket, setBasket, data, setData }) {

  const prop = useParams()
  console.log(prop);

  let n = 0
  function addBasket(id) {
    let newItem = data.find(item => item.id === id)
    setBasket([...basket, newItem])
  }

  return (
    <div className="cards">

      {
        data.map(item => <Card
          key={item.id}
          {...item}
          addItem={() => { addBasket(item.id) }}
        />
        )
      }
    </div>
  )
}

export default Cards