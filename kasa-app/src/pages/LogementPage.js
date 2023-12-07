import React from 'react';
import datas from '../data/data.json';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import classes from './LogementPage.module.scss';
import etoileGris from '../assets/etoileGris.png';
import etoileRouge from '../assets/etoileRouge.png';
import Collapse from '../components/collapse/Collapse';
import Slider from "../components/carousel/Carousel";




function LogementPage() {
 
		// État local pour les images du slider
		const [imageSlider, setImageSlider] = useState([]);

		// Récupération de l'ID du logement à partir des paramètres de l'URL
		const idLogementPage = useParams('id').id;

		// Filtrage des données pour obtenir les informations du logement actuel
		const dataCurrentLogementPage = datas.filter(data => data.id === idLogementPage);

		// Utilisation de useEffect pour mettre à jour les images du slider par rapport a l'ID 
		useEffect(() => {
		const dataCurrentLogementPage = datas.filter(data => data.id === idLogementPage);
		// Mise à jour de l'état des images du slider avec les images du logement actuel
		setImageSlider(dataCurrentLogementPage[0].pictures);
		}, [idLogementPage]);

		// Extraction du prénom et du nom de l'hôte à partir de la donnée
		const name = dataCurrentLogementPage[0].host.name.split(' ');

		// Extraction de la note de l'évaluation du logement
		const rating = dataCurrentLogementPage[0].rating;

		// Extraction de la description du logement
		const description  = dataCurrentLogementPage[0].description;

		// Extraction de la liste des équipements du logement
		const equipments = dataCurrentLogementPage[0].equipments;


	return (
		<>

			{/* Utilisation du composant Slider avec la propriété imageSlider */}
			<Slider imageSlider={imageSlider} />

			<main className={classes.LogementPage}>
				<div className={classes.LogementPage_content}>
					{/* Section d'informations sur le logement */}
					<div className={classes.LogementPage_content_infos}>
						<h1>{dataCurrentLogementPage[0].title}</h1>
						<p>{dataCurrentLogementPage[0].location}</p>
						<div>
							{/* Affichage des tags du logement */}
							{dataCurrentLogementPage[0].tags.map((tag, index) => {
							return (
								<button key={index}>{tag}</button>
							)
							})}
						</div>
					</div>

					{/* Section d'informations sur l'hôte du logement */}
					<div className={classes.LogementPage_content_host}>
						<div>
							<div className={classes.LogementPage_content_host_name}>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentLogementPage[0].host.picture} alt="LogementPage" />
						</div>

						{/* Section d'évaluation de l'hôte en étoiles */}
						<div className={classes.LogementPage_content_host_stars}>
							{[...Array(5)].map((star, index) => {
							const ratingValue = index + 1;
							return (
								<img key={index} src={ratingValue <= rating ? etoileRouge : etoileGris} alt="star" />
							)
							})}
						</div>
					</div>
				</div>

				{/* Section collapsible pour la description et les équipements */}
				<div className={classes.LogementPage_collapse}>
					<div className={classes.LogementPage_collapse_item}>
					{/* Composant Collapse pour la description */}
					<Collapse title={'Description'} content={description} />
					</div>
					<div className={classes.LogementPage_collapse_item}>
					{/* Composant Collapse pour les équipements */}
					<Collapse title={'Équipements'} content={equipments}/>
					</div>
				</div>
			</main>

			
		</>
	)
}

export default LogementPage