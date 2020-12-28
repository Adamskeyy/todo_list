import "./App.css";

import Navigation from "./components/Navbar/Navbar";
import SignUp from "./components/Auth/SignUp/SignUp";
import LogIn from "./components/Auth/LogIn/LogIn";
import LogOut from "./components/Auth/LogOut/LogOut.js";
import Profile from "./components/Profile/Profile.js";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile.js";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.js";
import Header from "./components/Header/Header";
// import TodoApp from "./containers/TodoApp/TodoApp";
import TodoAppFB from "./containers/TodoApp/TodoAppFB";
import AuthProvider from "./contexts/AuthContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./hoc/PrivateRoute";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <AuthProvider>
          <Navigation />
          <Switch>
            <PrivateRoute
              exact
              path={`${process.env.PUBLIC_URL}`}
              component={TodoAppFB}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/signup`}
              component={SignUp}
            />
            <Route path={`${process.env.PUBLIC_URL}/login`} component={LogIn} />
            <Route
              path={`${process.env.PUBLIC_URL}/forgot-password`}
              component={ForgotPassword}
            />
            <PrivateRoute
              path={`${process.env.PUBLIC_URL}/profile`}
              component={Profile}
            />
            <PrivateRoute
              path={`${process.env.PUBLIC_URL}/update-profile`}
              component={UpdateProfile}
            />
            <PrivateRoute
              path={`${process.env.PUBLIC_URL}/logout`}
              component={LogOut}
            />
            <Redirect to={`${process.env.PUBLIC_URL}/login`} />
          </Switch>
        </AuthProvider>
      </Router>
      {/* <TodoApp /> */}
    </div>
  );
};

export default App;
