import Cards from "./Cards"
import MainSelect from "./MainSelect"
import Promo from "./Promo"
import Sebet from "./Sebet/Sebet"


function Main({ sebet, setSebet }) {
    // console.log(setSebet)
    return (
        <main>
            <div className="container">
                <Promo />
                <MainSelect />
                <Cards />
            </div>
            <Sebet sebet={sebet} setSebet={setSebet} />

        </main>
    )
}

export default Main