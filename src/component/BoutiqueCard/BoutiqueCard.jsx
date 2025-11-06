import {useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BoutiqueContext from '../../context/BoutiqueContext';
import './BoutiqueCard.css'


const style = {
  styleCard: { width: "100%",  minHeight:740 },
  styleCardMedia: { height: 450 }
}
export default function BoutiqueCard(props) {
  
  const boutiqueContext = useContext(BoutiqueContext);
  console.log(boutiqueContext)
  return (
    <div className='maCard'>
      <Card sx={style.styleCard}>
        <CardMedia
          sx={style.styleCardMedia}
          image={props.costume.url}
          title="green iguana"
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.costume.name}
          </Typography>
          <Typography gutterBottom variant="overline" component="div">
            Price : {props.costume.price} $
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Depechez-vous! il reste {props.costume.qte} exemplaires en stoque!!!
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.costume.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ marginTop: 'auto' }}>
          <Button
          disabled={ props.costume.qte === 0 ? true : false  } 
          size="small"  
          onClick={()=>boutiqueContext.addCart(props.costume.id)}>Add to Cart!!!</Button>
        </CardActions>
      </Card>
    </div>
  );
}
