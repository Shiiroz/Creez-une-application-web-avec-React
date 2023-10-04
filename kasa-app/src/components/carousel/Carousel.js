import classes from './carousel.module.scss';
import rightChevron from '../../assets/chevron_carousel_right.png';
import leftChevron from '../../assets/chevron_carousel_left.png';
import { useState } from 'react'

export default function Slider({imageSlider}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }

    return (
        <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className={classes.carousel}>
            {imageSlider.length > 1 && 
                <>
                    <img 
                        className='carousel_arrow carousel_arrow_right' 
                        src={rightChevron} 
                        alt="show next slider" 
                        onClick={nextSlide}
                    />
                    <img 
                        className='carousel_arrow carousel_arrow_left' 
                        src={leftChevron} 
                        alt="show previous slider" 
                        onClick={prevSlide}
                    />
                    <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>
                </>
            } 
        </section>
    )
}
