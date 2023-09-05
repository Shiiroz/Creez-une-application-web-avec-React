import { NavLink } from 'react-router-dom';
import classes from './nav.module.scss';

export default function Nav ()  {
    return (
      <nav className={classes.navHeader}>
        <NavLink to="/" className={classes.navLink}>
          Accueil
        </NavLink>

        <NavLink to="/about" className={classes.navLink}>
          A Propos
        </NavLink>
        
      </nav>
    );
  };
