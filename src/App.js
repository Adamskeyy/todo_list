import "./App.css";

import Navigation from "./components/Navbar/Navbar";
import SignUp from "./components/Auth/SignUp/SignUp";
import LogIn from "./components/Auth/LogIn/LogIn";
import LogOut from "./components/Auth/LogOut/LogOut.js";
import Profile from "./components/Profile/Profile.js";
import Header from "./components/Header/Header";
import TodoApp from "./containers/TodoApp/TodoApp";
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
              component={TodoApp}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/signup`}
              component={SignUp}
            />
            <Route path={`${process.env.PUBLIC_URL}/login`} component={LogIn} />
            <PrivateRoute
              path={`${process.env.PUBLIC_URL}/profile`}
              component={Profile}
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
