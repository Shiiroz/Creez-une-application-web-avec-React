import React from'react';
import Banniere from '../components/Banner';
// import CardComponent from '../components/CardComponent';

export default function Home() {
    return <>
                <div className="home">
                    <div>
                        <Banniere />
                    </div>
                    <main>
                    {/* <CardComponent /> */}
                    </main>
                </div>
            </>;
    
}