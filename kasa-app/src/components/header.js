import Nav from './nav.js';
import "../style/header.css";

export default function Header() {
    return (
      <header className="header">
        <div className="header__fig">
          <img className="logo" src='../images/logo/LOGO.png' alt="logo de l'agence kasa" />
        </div>
        <Nav />
      </header>
    );
  }