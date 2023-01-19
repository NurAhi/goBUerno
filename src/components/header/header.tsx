import logo from "../../assets/images/escudo.png";

export const Header: React.FC = () => (
  <header className="c-header">
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="first-div">
        <div className="point" />
      </div>
      <div className="second-div">
        <div className="red-div" />
        <div className="yellow-div" />
        <div className="red-div" />
      </div>
    </div>
    <img className="c-header__image" alt="logo-bu" src={logo}></img>
    <h3 className="c-header__text" style={{ fontWeight: "bold" }}>
      GO<strong className="black">BU</strong>ERNO DE EZPAÑA
    </h3>
    <div className="separation" />
    <h3 className="c-header__text" style={{ fontWeight: "bold" }}>
      <strong className="black">MIR</strong>ISTERIO
    </h3>
  </header>
);
