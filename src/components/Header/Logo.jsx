import LogoName from "../../assets/logo.svg";
const Logo = () => {
  return (
    <a href="./index.html">
      <img className="h-9" src={LogoName} alt="Weather App" />
    </a>
  );
};

export default Logo;
