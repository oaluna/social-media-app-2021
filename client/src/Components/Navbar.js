import { Link } from "react-router-dom";

const Navbar = () => (
  <div>
    <div
      className="navbar"
      style={{
        display: "flex",
        flexDirection: "row",
        textAlign: "left",
        zIndex: 9999999,
      }}
    >
      <div
        className="navbar-title"
        style={{ textAlign: "left", width: "450px", height: "auto" }}
      ></div>
      <div className="navbar-links-container">
        <ul
          className="navbar-links"
          style={{
            zIndex: 999999,

            width: "100%",
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            color: "rgba(255,255,255,1)",

            marginLeft: "30vw",
          }}
        >
          <li>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/hello"
            >
              Hello
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              About
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Login/Signup
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;
