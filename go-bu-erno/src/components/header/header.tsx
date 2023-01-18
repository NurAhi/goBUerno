import logo from "../../assets/images/escudo.png";

export const Header: React.FC = () => (
  <header className="c-header">
    <div className="first-div">
      <div className="point" />
    </div>
    <div className="second-div">
      <div className="red-div" />
      <div className="yellow-div" />
      <div className="red-div" />
    </div>
    <img className="c-header__image" alt="logo-bu" src={logo}></img>
    <h3 className="c-header__text">
      go<strong className="black">BU</strong>erno de eZpaña
    </h3>
    <div className="separation" />
    <h3 className="c-header__text">Formación caritaria especializada</h3>
  </header>
);
