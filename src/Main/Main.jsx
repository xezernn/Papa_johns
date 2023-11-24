import Cards from "./Cards"
import MainSelect from "./MainSelect"
import Promo from "./Promo"

function Main() {
    return (
        <main>
            <div className="container">
                <Promo />
                <MainSelect />
                <Cards />
            </div>
        </main>
    )
}

export default Main