import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";

const Footer = () => (
  <footer
    style={{
      position: "absolute",
      left: "0vw",
      right: "0vw",
      bottom: "0vh",
      padding: 0,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      background: "purple",
    }}
  >
    <div className="footerLogo">
      <img
        src={Logo}
        alt="site logo"
        style={{ textAlign: "left", width: "100px", margin: "15px auto" }}
      />
    </div>
    <div className="footerCopyright">
      <small>
        &copy;2021 by <Link to="https://oscarluna.dev">Oscar Armando Luna</Link>
      </small>
    </div>
  </footer>
);

export default Footer;
