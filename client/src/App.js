import { BrowserRouter, Route } from "react-router-dom";
import Hello from "./Components/Screens/Hello";
import Home from "./Components/Screens/Home";
import Navbar from "./Components/Navbar";
import "./App.css"

function App({hasAuthorization, signin}) {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {!hasAuthorization && (<img className=
        "backgroundImage"
          src="https://images.pexels.com/photos/1910225/pexels-photo-1910225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="colorful design background"
        />)}
        <Route component={Hello} path="/hello" exact />
        <Route component={Home} path="/" exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
