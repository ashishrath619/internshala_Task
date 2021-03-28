import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

// import Servicepage from "./Component/Servicepage";

import Card from "./Component/Card";
import Login from "./Component/LoginCard";
import Signup from "./Component/Singup";
import Navbar from "./Component/Navbar";
import Dashboard from "./Component/Dashboard";
// import Flowcharttwo from "./Component/Flowcharttwo";
function App(props) {
  return (
    <Router>
      <Route
        exact
        strict
        component={Navbar}
        path="/Navbar"
        history={props.history}
      />
      <Route
        exact
        strict
        component={Card}
        path="/Card"
        history={props.history}
      />
      <Route
        exact
        strict
        component={Dashboard}
        path="/Dashboard"
        history={props.history}
      />
      <Route
        exact
        strict
        component={Signup}
        path="/Signup"
        history={props.history}
      />

      <Route
        exact
        strict
        component={Login}
        path="/Login"
        history={props.history}
      />
    </Router>
  );
}

export default App;
