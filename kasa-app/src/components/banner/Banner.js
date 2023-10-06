import React from "react";
import classes from './Banner.module.scss';

function Banniere(props) {
  return (
    <div className={classes.banner}>
      <img className={classes.ban} src={props.imageUrl} alt="Bannière" />
      <h2 className={classes.bannerTexte}>
        {props.text && <p>{props.text}</p>}
      </h2>
    </div>
  );
}

export default Banniere;
