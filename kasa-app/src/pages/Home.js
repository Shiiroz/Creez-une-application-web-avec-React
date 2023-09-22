import React from'react';
import Banniere from '../components/banner/Banner';
import CardComponent from '../components/cardcomponents/CardComponent';
import Catalogue from '../components/cardcomponents/Catalogue';

export default function Home() {
    return <>
                <div className="home">
                    <div>
                        <Banniere />
                    </div>
                    <main>
                    <CardComponent />
                    <Catalogue />
                    </main>
                </div>
            </>;
    
}