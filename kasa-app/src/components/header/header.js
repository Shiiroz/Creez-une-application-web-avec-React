import Nav from '../nav/nav';
import "../../style/header.css";

export default function Header() {
    return (
      <header className="header">
        <div className="header__fig">
          <img className="logo" src='.../images/logo/logo_footer.png' alt="logo de l'agence kasa" />
        </div>
        <Nav className="nav-header" />
      </header>
    );
  }