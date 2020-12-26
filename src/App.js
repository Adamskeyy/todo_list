import "./App.css";
import SignUp from "./components/Auth/SignUp/SignUp";
import LogIn from "./components/Auth/LogIn/LogIn";
import Header from "./components/Header/Header";
import TodoApp from "./containers/TodoApp/TodoApp";
import AuthProvider from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <AuthProvider>
          <Switch>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}`}
              component={TodoApp}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/signup`}
              component={SignUp}
            />
            <Route path={`${process.env.PUBLIC_URL}/login`} component={LogIn} />
          </Switch>
        </AuthProvider>
      </Router>
      {/* <TodoApp /> */}
    </div>
  );
};

export default App;
