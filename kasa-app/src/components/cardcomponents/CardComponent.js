import React from 'react'
import classes from './CardComponent.module.scss'

function CardComponent({image, title}) {
  return (
    <figure className={classes.grid}>
       <img src={image} alt={title}  className={classes.carte_img} />
       <figcaption>
          <h2 className={classes.carte_titre}>{title}</h2>
          <div className={classes.card_overlay}></div>
       </figcaption>
    </figure>
  )
}

export default CardComponent