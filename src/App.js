import "./App.css";

import { useAuth } from "./contexts/AuthContext";

import Navigation from "./components/Navbar/Navigation";
import SignUp from "./components/Auth/SignUp/SignUp";
import LogIn from "./components/Auth/LogIn/LogIn";
import LogOut from "./components/Auth/LogOut/LogOut.js";
import Profile from "./components/Profile/Profile.js";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile.js";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.js";
import Header from "./components/Header/Header";
import TodoAppFB from "./containers/TodoApp/TodoAppFB";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import PrivateRoute from "./hoc/PrivateRoute";

const App = () => {
  const { currentUser } = useAuth();
  // const envPath = process.env.PUBLIC_URL;

  const routes = currentUser ? (
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}`} component={TodoAppFB} />
      <Route path={`${process.env.PUBLIC_URL}/profile`} component={Profile} />
      <Route
        path={`${process.env.PUBLIC_URL}/update-profile`}
        component={UpdateProfile}
      />
      <Route path={`${process.env.PUBLIC_URL}/logout`} component={LogOut} />
      <Redirect to={`${process.env.PUBLIC_URL}`} />
    </Switch>
  ) : (
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/signup`} component={SignUp} />
      <Route path={`${process.env.PUBLIC_URL}/login`} component={LogIn} />
      <Route
        path={`${process.env.PUBLIC_URL}/forgot-password`}
        component={ForgotPassword}
      />
      <Redirect to={`${process.env.PUBLIC_URL}/login`} />
    </Switch>
  );

  return (
    <div className="App">
      <Header />
      <Router>
        <Navigation />
        {routes}
      </Router>
    </div>
  );
};

export default App;
