import "./App.css";
import Header from "./components/Header/Header";
import TodoApp from "./containers/TodoApp/TodoApp";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoApp />
    </div>
  );
};

export default App;
