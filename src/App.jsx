import { useState } from 'react'
import './App.css'
import MenuBoutique from './component/MenuBoutique/MenuBoutique'
import Boutiques from './component/Boutique/Boutiques'
import articles from './services/catalogue.service'
import BoutiqueContext from './context/BoutiqueContext'
import Cart from './component/Cart/Cart'


function App() {
  const [catalogue, setCatalogue] = useState(articles);
  const [cart, setCart] = useState([])
  const addCart = (id) => {
    if (catalogue[id].qte > 0) {
      const catalogueTmp = catalogue.map((value, index) => {
        if (index === id) {
          value.qte--
        }
        return value;
      })
      setCatalogue(catalogueTmp);
    }
  }
  return (
    <BoutiqueContext.Provider value={{
      catalogue,
      cart,
      addCart: addCart
    }}>
      <header>
        <MenuBoutique />
      </header>
      <main>
        <Cart></Cart>
        <Boutiques catalogue={catalogue}></Boutiques>

      </main>
      <footer></footer>
    </BoutiqueContext.Provider>
  )
}

export default App
