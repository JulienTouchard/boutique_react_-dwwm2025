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
          value.qte--;
        }
        return value;
      })
      setCatalogue(catalogueTmp);
      // ajout des nouveaux articles dans le cart a partir de leur id
      //{id:0,qte:53}
      let cartTmp;
      if (cart.length > 0) {
        let gotIt = false;
        cartTmp = cart.map((value, index) => {
          if (value.id === id) {
            value.qte++;
            gotIt = true
          }
          return value;
        })
        if (!gotIt) cartTmp.push({ id: id, qte: 1 })
      } else {
        cartTmp = [{ id: id, qte: 1 }]
      }
      cartTmp.sort()
      setCart(cartTmp);
    }
  }
  const removeFromCart = (id) => {
    console.log("id remove : ", id)
    // add qte
    const catalogueTmp = catalogue.map((value, index) => {
      if (index === id) {
        value.qte++;
      }
      return value;
    })
    setCatalogue(catalogueTmp);
    // remove from cart
    // je crée un indice deleteIndex pour supprimer du tableau cartTmp l'entrée§µ
    // dont la qte === 1
    let deleteIndex = undefined;
    // je copie mon tableau cart dans un nouveau
    const cartTmp = cart.map((value,index)=>{
      // si l'entrée a supprimer existe dans mon tableau
      if(value.id === id){
        // si sa qte est superieur à 1
        if(value.qte > 1){
          // je la decremente
          value.qte--
        } else { // si elle est au moins egale a 1
          // je l'ajoute a mon deleteIndex en vue de la supprimer 
          // de cartTmp à la fin de ma boucle
          deleteIndex = index;
        }
      }
      return value;
    })
    // fin de boucle et suppression d'une entrée egale à 1 si elle existe
    if( deleteIndex !== undefined){
      cartTmp.splice(deleteIndex,1)
    }
    // set de mon tableau modifier dans cart
    setCart(cartTmp);
  }
  return (
    <BoutiqueContext.Provider value={{
      catalogue,
      cart,
      addCart: addCart,
      removeFromCart: removeFromCart
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
