import { useParams } from "react-router-dom"
import Card from "./Card"
import { nanoid } from "nanoid";
import Promo from "../Main Top Bar/Promo";
import MainSelect from "../Main Top Bar/MainSelect";

function Cards({ basket, setBasket, data, setData }) {

  let { prop, url } = useParams()
  prop = prop === undefined ? "Pizzalar":prop
  function addBasket(name,price) {
    let newItem = data.find(item => item.name === name);
    typeof price === "number"?  newItem.price=price : newItem.price=price.xs
    const index = basket.findIndex(item => item.name === name);
    if (index === -1) {
      setBasket([...basket, { ...newItem, count: 1 }]);
    } else {
      setBasket(prevBasket => {
        const updatedBasket = [...prevBasket];
        updatedBasket[index] = { ...updatedBasket[index], count: updatedBasket[index].count + 1 };
        return updatedBasket;
      });
    }
  }

  return (
    <>
      <Promo />
      {prop === "Pizzalar" && <MainSelect /> }
      <div className="cards">
        {
          data.filter(item => item.category == prop ).map(item => <Card
            key={nanoid()}
            {...item}
            addItem = {()=>{addBasket(item.name, item.price)}}
          />
          )
        }
      </div>
    </>
  )
}

export default Cards