import React from 'react';
import classes from './footer.module.scss';

export default function Footer() {
    return (
      <footer className={classes.footer}>
        <div>
        <img src='../images/logo/logo_footer.png' alt="logoFooter"  />
        </div>
        <p className={classes.footer__text}>
          © 2020 Kasa. All rights reserved
        </p>
      </footer>
    );
}

