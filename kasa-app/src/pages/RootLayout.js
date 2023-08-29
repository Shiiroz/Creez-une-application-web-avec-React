import Header from "../components/header/header";
import {Outlet} from "react-router-dom";
import Footer from "../components/footer/Footer";

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