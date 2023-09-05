import Header from "../components/header";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";

export default function RootLayout(){
    return (
        <>
            <Header />
           <main>
            <Outlet></Outlet>          
           </main>
           <Footer />
        </>
    );
}