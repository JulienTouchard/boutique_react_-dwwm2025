import React, { useContext } from 'react'
import BoutiqueContext from '../../context/BoutiqueContext'

function ArticleCart(props) {
  const boutiqueContext = useContext(BoutiqueContext);
  const values = boutiqueContext.catalogue[props.id];
  return (
    <div style={{display:'flex'}}>
      <div style={{maxWidth:200}}><img src={values.url}/></div>
      <div>{values.name}</div>
      <div>{values.price}</div>
      <div>-</div>
      <div>?</div>
      <div>+</div>
      <div>Total : {"??"}</div>
    </div>
  )
}

export default ArticleCart