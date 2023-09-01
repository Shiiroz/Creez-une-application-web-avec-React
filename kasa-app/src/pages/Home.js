import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1><NavLink to="/">Home</NavLink> </h1>
        </div>
    );
}