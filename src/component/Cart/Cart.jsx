import React, { useContext } from 'react'
import BoutiqueContext from '../../context/BoutiqueContext'
import ArticleCart from '../ArticleCart/ArticleCart';

const Cart = () => {
    const boutiqueContext = useContext(BoutiqueContext);
    if (boutiqueContext.cart.length) {
        return (
            <div>
                {
                   boutiqueContext.cart.map((value,index)=><ArticleCart key={index} id={value}/>)
                }
            </div>
        )
    } else {
        return (
            <div>
                Aucun article dans votre Panier.
            </div>
        )
    }
}

export default Cart