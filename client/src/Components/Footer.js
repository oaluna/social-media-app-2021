import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import "./Footer.css";
function Footer () {
  return (
    <footer className="footer">
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
}
export default Footer;
