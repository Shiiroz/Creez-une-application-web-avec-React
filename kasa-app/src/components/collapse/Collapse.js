import classes from './collapse.scss';
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

export default function Collapse({title, content}) {

    // État pour suivre l'état de bascule (ouverture/fermeture) du contenu
const [toggle, setToggle] = useState(false);

// JSX pour le composant de collapsible (contenu pliable)
return (
    <>
        {/* Conteneur du collaps */}
        <div className={classes.collapse}>
            {/* Titre du collaps avec un gestionnaire de clic pour basculer l'état de toggle (fermeture ou ouverture) */}
            <h3 className='collapse_title' onClick={() => setToggle(!toggle)}>
                {title}
                {/* Flèche indiquant si le contenu est actuellement ouvert ou fermé */}
                <img
                    className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'}
                    src={arrow}
                    alt="Afficher le contenu"
                />
            </h3>

            {/* Contenu du collaps, conditionnellement rendu en fonction de l'état de toggle (fermeture ou ouverture) */}
            <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                {/* Vérifie si le contenu est un tableau et le recupere */}
                {Array.isArray(content) ? content.map((item, index) => {
                    return (
                        <span key={index}>{item}</span>
                    )
                }) : 
                // Si le contenu n'est pas un tableau, rend directement le contenu
                content
                }
            </div>
        </div>
    </>
)
}
