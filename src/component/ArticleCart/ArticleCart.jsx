import React, { useContext } from 'react'
import BoutiqueContext from '../../context/BoutiqueContext'
const styles = {
  articles:{margin:'0 auto',padding:'1.5rem',display: 'flex', justifyContent: 'space-between' , alignItems:'center',width:'90vw',borderRadius:20,border:".1px grey solid"}
}
function ArticleCart(props) {
  const boutiqueContext = useContext(BoutiqueContext);
  const values = boutiqueContext.catalogue[props.id];
  return (
    <div style={styles.articles}>
      <div style={{ maxWidth: 50 }}><img src={values.url}/></div>
      <div>{values.name}</div>
      <div>{values.price}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width:100 }}>
        <div>-</div>
        <div>?</div>
        <div>+</div>
      </div>
      <div>Total : {"??"}</div>
    </div>
  )
}

export default ArticleCart