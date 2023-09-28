import React from 'react';
import datas from '../data/data.json';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import './LogementPage.scss';
import etoileGris from '../assets/etoileGris.png';
import etoileRouge from '../assets/etoileRouge.png';
import Collapse from '../components/collapse/Collapse';
import Slider from "../components/carousel/Carousel";




function LogementPage() {
 
  const [imageSlider, setImageSlider] = useState([]);

	const idLogementPage = useParams('id').id;
	const dataCurrentLogementPage = datas.filter(data => data.id === idLogementPage);
	
	useEffect(() => {
		const dataCurrentLogementPage = datas.filter(data => data.id === idLogementPage);
		setImageSlider(dataCurrentLogementPage[0].pictures);
	}, [idLogementPage]);

	const name = dataCurrentLogementPage[0].host.name.split(' '); 
	const rating = dataCurrentLogementPage[0].rating;
	const description  = dataCurrentLogementPage[0].description;
	const equipments = dataCurrentLogementPage[0].equipments;

	return (
		<>

			<Slider imageSlider={imageSlider}/>
			<main className="LogementPage">
				<div className="LogementPage_content">
					<div className="LogementPage_content_infos">
						<h1>{dataCurrentLogementPage[0].title}</h1>
						<p>{dataCurrentLogementPage[0].location}</p>
						<div>
							{dataCurrentLogementPage[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="LogementPage_content_host">
						<div>
							<div className='LogementPage_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentLogementPage[0].host.picture} alt="LogementPage" />
						</div>
							
						<div className="LogementPage_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? etoileRouge : etoileGris} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="LogementPage_collapse">
					<div className="LogementPage_collapse_item">
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className="LogementPage_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
			
		</>
	)
}

export default LogementPage