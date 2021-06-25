import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedinCheck } from "./state/action/AuthAction";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import TasksHome from "./pages/TasksHome";
import DrawerComponent from "./components/Navbar/DrawerComponent";
import { Button, Flex, useColorMode } from "@chakra-ui/react";
import Dashboard from "./pages/Dashboard";
import Room from "./pages/Room";
import YourRoom from "./pages/YourRoom";
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
    <Flex flexDirection="column">
      <DrawerComponent />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/personal" component={TasksHome} />
        <Route exact path="/room" component={Room} />
        <Route exact path="/your/room/:id" component={YourRoom} />
      </Switch>
    </Flex>
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
