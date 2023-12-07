import './carousel.scss';
import rightChevron from '../../assets/chevron_carousel_right.png';
import leftChevron from '../../assets/chevron_carousel_left.png';
import { useState } from 'react'

export default function Slider({imageSlider}) {

// État pour suivre l'index actuel du carrousel d'images
const [currentIndex, setCurrentIndex] = useState(0)

// Fonction pour passer à la diapositive suivante
const nextSlide = () => {
    // Incrémenter l'index actuel
    setCurrentIndex(currentIndex + 1)

    // Si l'index actuel atteint la dernière image, le réinitialiser à la première image
    if(currentIndex === imageSlider.length - 1)
        setCurrentIndex(0)
}

// Fonction pour passer à la diapositive précédente
const prevSlide = () => {
    // Décrémenter l'index actuel
    setCurrentIndex(currentIndex - 1)

    // Si l'index actuel est à la première image, le régler sur la dernière image
    if(currentIndex === 0)
        setCurrentIndex(imageSlider.length - 1)
}

// JSX pour la section du carrousel d'images
return (
    <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carousel'>
        {imageSlider.length > 1 && 
            <>
                {/* Flèche droite pour passer à l'image' suivante */}
                <img 
                    className='carousel_arrow carousel_arrow_right' 
                    src={rightChevron} 
                    alt="Afficher la diapositive suivante" 
                    onClick={nextSlide}
                />
                {/* Flèche gauche pour passer à l'image' précédente */}
                <img 
                    className='carousel_arrow carousel_arrow_left' 
                    src={leftChevron} 
                    alt="Afficher la diapositive précédente" 
                    onClick={prevSlide}
                />
                {/* Compteur de diapositives (commenté car actuellement désactivé) */}
                {/* <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p> */}
            </>
        } 
    </section>
)
}
