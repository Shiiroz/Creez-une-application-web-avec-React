import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DataLogement from '../../data/data.json';
import Carrousel from './Carrousel'; 
import Tag from './tag'; 
import Host from './Host'; 
import Rate from './Rate'; 



function Logments() {
    // Récupérer l'ID du logement depuis les paramètres de l'URL
    const { id } = useParams();
  
    // Trouver le logement correspondant à l'ID
    const logement = DataLogement.find((logement) => logement.id === id);
  
    // Si aucun logement correspondant n'est trouvé, rediriger vers "/404"
    if (!logement) {
      return <Navigate replace to="/404" />;
    }
  
    // Équipements
    const equipement = logement.equipements.map((equipment, i) => (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    ));
  
    // Tags
    const tagsLog = logement.tags.map((tags, i) => (
      <Tag key={i} nom={tags} /> // Assurez-vous que le composant "Tag" est correctement importé
    ));
  
    return (
      <div className="Fiche-container">
        <Carrousel slides={logement.pictures} /> {/* Utilisez "logement.pictures" au lieu de "DataLogement?.pictures" */}
        <section className="Fiche-logement">
          <div className="description-info">
            <div className="description-info__titletags">
              <div className="description-info__titletags__title">
                <span className="titre-logement">{logement.title}</span> {/* Utilisez "logement.title" */}
                <span className="endroit-logement">{logement.location}</span> {/* Utilisez "logement.location" */}
              </div>
              {/* Tags */}
              <div className="description-info__titletags__tags">{tagsLog}</div>
            </div>
  
            <div className="description-info__proprietaire">
              {/* Hosting */}
              <div className="description-info__proprietaire__nom-prop">
                <Host
                  name={logement.host.name} 
                  picture={logement.host.picture} 
                />
              </div>
              {/* Rating */}
              <div className="description-info__proprietaire__rate">
                <Rate score={logement.rating} /> {/* Utilisez "logement.rating" */}
              </div>
            </div>
          </div>
        </section>
        {/* Collapse */}
        <div className="description-centent">
          <div className="description-centent__description">
            {/* <Collapse title="Description" content={logement.description} /> Utilisez "logement.description" */}
          </div>
          <div className="description-centent__equipement">{equipement}</div>
        </div>
      </div>
    );
  }
  
  export default Logments;
