import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedinCheck } from "./state/action/AuthAction";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
function App() {
  const dispatch = useDispatch();

  const { authenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(userLoggedinCheck());
  }, []);
  return (
    <Router>{authenticated ? <AuthRouters /> : <NonAuthRouters />}</Router>
  );
}

function AuthRouters() {
  return (
    <div className="AuthRoutersclass">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

function NonAuthRouters() {
  return (
    <div className="AuthRoutersclass">
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
