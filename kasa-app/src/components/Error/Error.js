import React from 'react';
import classes from './Error.module.scss';
import { Link } from 'react-router-dom';

export default function Error() {
	return (
		<div className={classes.Error}>
			<div className={classes.Error}>
				<h1 className={classes.Error_infos_title}>404</h1>
				<p className={classes.Error_infos_content}>La page que vous recherchez n'existe pas.</p>
			</div>
				<Link className={classes.Error_infos_retour} to='/'>Retourner sur la page d'accueil</Link>
		</div>
	)
}
