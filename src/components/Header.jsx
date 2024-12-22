import logo from "../assets/images/logo-teal.svg";
import img from "../img/image.jpg";

const Header = ({ name, description, img }) => {
  return (
    <header>
      <div className="content-header">
        <div className="logo container">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <section className="container">
        <div className="desc">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <img src={img} alt="" />
      </section>
    </header>
  );
};

export default Header;
