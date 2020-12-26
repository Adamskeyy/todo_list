import "./App.css";
import SignUp from "./components/Auth/SignUp/SignUp";
import Header from "./components/Header/Header";
import TodoApp from "./containers/TodoApp/TodoApp";
import AuthProvider from "./contexts/AuthContext";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <SignUp />
        <TodoApp />
      </AuthProvider>
    </div>
  );
};

export default App;
