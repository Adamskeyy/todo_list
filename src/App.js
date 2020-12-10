import "./App.css";
import Button from './components/Button/Button'
import TaskList from './components/TaskList/TaskList'

function App() {
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <Button />
      <TaskList />
    </div>
  );
}

export default App;
