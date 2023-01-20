import logo from "../../assets/images/escudo.png";
import { Link } from "react-router-dom";

export const Header: React.FC = () => (
  <header className="c-header">
    <Link
      to="/goBUerno"
      relative="path"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <div className="first-div">
        <div className="point" />
      </div>
      <div className="second-div">
        <div className="red-div" />
        <div className="yellow-div" />
        <div className="red-div" />
      </div>
      <img className="c-header__image" alt="logo-bu" src={logo}></img>
    </Link>
    <div className="c-header-wrapper-text">
      <h3 className="c-header__text" style={{ fontWeight: "bold" }}>
        GO<strong className="black">BU</strong>ERNO DE EZPAÑA
      </h3>
      <div className="separation" />
      <h3 className="c-header__text" style={{ fontWeight: "bold" }}>
        <strong className="black">MIR</strong>ISTERIO
      </h3>
    </div>
  </header>
);
