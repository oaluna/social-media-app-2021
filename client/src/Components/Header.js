import Logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={Logo} alt="KickIt: Just Kickin\' it" />
        <h6 style={{ fontWeight: 100, lineHeight: 1 }}>Just Kickin' It</h6>
      </div>
    </div>
  );
};

export default Header;
