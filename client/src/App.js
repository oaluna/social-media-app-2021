import { BrowserRouter, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Login from "./auth/Login";
import Home from "./Components/Screens/Home";

import Header from "./Components/Header"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css"

function App({hasAuthorization}) {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Header />
        <Route component={Login} path="/Login" exact />
        <Route component={Signup} path="/Signup" exact />
        <Route component={Home} path="/" exact />
        <Footer />
      </div>
      {!hasAuthorization && (
        <img
          className="backgroundImage"
          src="https://images.pexels.com/photos/1910225/pexels-photo-1910225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="colorful design background"
        />
      )}
    </BrowserRouter>
  );
}

export default App;
