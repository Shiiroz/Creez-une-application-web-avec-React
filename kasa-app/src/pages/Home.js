import React from'react';
import './Home.scss';
import Banniere from '../components/banner/Banner';
import Catalogue from '../components/cardcomponents/Catalogue';

export default function Home() {
    const imageUrlHome = '/images/banner/homeBanner.png';
    const textePremierePage = 'Chez vous, partout et ailleurs';

    return <>
                <div className="home">
                    <div className='banner'>
                        <Banniere imageUrl={imageUrlHome} text={textePremierePage}  />
                    </div>
                    <Catalogue className="catalogue" />
                </div>
            </>;
    
}