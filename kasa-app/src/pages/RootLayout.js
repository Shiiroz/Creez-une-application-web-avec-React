import Header from "../components/header/header";
import {Outlet} from "react-router-dom";
import Footer from "../components/footer/Footer";
import classes from "./RootLayout.module.scss";

export default function RootLayout(){
    return (
        <>
        <div className={classes.Header}>
            <Header  />
           <main>
            <Outlet></Outlet>          
           </main>
           <Footer />
        </div>
        </>
    );
}