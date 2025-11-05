import React from 'react'
import BoutiqueCard from '../BoutiqueCard/BoutiqueCard'

import './Boutique.css'

function Boutiques(props) {
   
    return (
        <div className='Boutique'>
            {
                props.catalogue.map((value,index)=>
                <BoutiqueCard 
                key={index}
                costume={value}    
                />)
                    
                
            }
            

        </div>
    )
}

export default Boutiques