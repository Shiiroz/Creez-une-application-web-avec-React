import React from'react';
import Banniere from '../components/banner/Banner';
import CardComponent from '../components/cardcomponents/CardComponent';

export default function Home() {
    return <>
                <div className="home">
                    <div>
                        <Banniere />
                    </div>
                    <main>
                    <CardComponent />
                    </main>
                </div>
            </>;
    
}