import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Error.module.scss';

function Error() {
  return (
    <div className={classes.error}>
    <p className={classes.error__Number}>404</p>
    <p className={classes.error__Text}>
      Oups! La page que vous demandez n'existe pas.
    </p>
    <NavLink to="/" className={classes.error__Link}>
      Retourner sur la page d'accueil
    </NavLink>
  </div>
  )
}

export default Error