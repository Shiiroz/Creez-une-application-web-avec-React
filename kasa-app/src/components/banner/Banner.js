import React from "react";
import classes from './Banner.module.scss'


function Banniere() {
  return (
    <div className={classes.banner}>
      <img className={classes.ban} src='../images/banner/homeBanner.png' alt="Bannière" />
      <h2 className={classes.bannerTexte}>Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banniere;