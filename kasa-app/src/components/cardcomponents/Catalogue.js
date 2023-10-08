import React from 'react'
import classes from './Catalogue.module.scss'
import DataLogements from '../../data/data.json';
import { Link } from "react-router-dom";
import CardComponent from './CardComponent';

function Catalogue() {
  return (
    <div className={classes.home_catalogue}>
      {DataLogements.map((logement) => {
        return (
           
             <Link to={`/logement/${logement.id}`} key={logement.id}>
               <CardComponent image={logement.cover} title={logement.title} />
             </Link>
          
        );
      })}
    </div>
  );
};


export default Catalogue