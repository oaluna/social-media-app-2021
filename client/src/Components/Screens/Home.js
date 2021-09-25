import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

const Home = () =>(
    <div>
      <div className="header">
        <img src={Logo} alt="KickIt: Just Kickin\' it" />
      </div>
      <p style={{ position: "absolute", bottom: "0vh" }}>
        Click here to jump to <Link to="/Hello">Hello</Link>
      </p>
    </div>
  );


export default Home;
