import React, { useContext } from 'react'
import BoutiqueContext from '../../context/BoutiqueContext'
import DeleteIcon from '@mui/icons-material/Delete';
const styles = {
  articles:{margin:'0 auto',padding:'1.5rem',display: 'flex', justifyContent: 'space-between' , alignItems:'center',width:'90vw',borderRadius:20,border:".1px grey solid"}
}
function ArticleCart(props) {
  const boutiqueContext = useContext(BoutiqueContext);
  const values = boutiqueContext.catalogue[props.item.id];
  return (
    <div style={styles.articles}>
      <div style={{ maxWidth: 50 }}><img src={values.url}/></div>
      <div>{values.name}</div>
      <div>{values.price} $</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width:100 }}>
        <div onClick={()=>boutiqueContext.removeFromCart(props.item.id)}>-</div>
        <div>{props.item.qte}</div>
        <div onClick={()=>boutiqueContext.addCart(props.item.id)}>+</div>
        <div onClick={()=>boutiqueContext.removeAll(props.item.id)}><DeleteIcon/></div>
      </div>
      <div>Total : {props.item.qte*values.price} $</div>
    </div>
  )
}

export default ArticleCart