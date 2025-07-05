import AppName from "./components/AppName"
import './App.css';
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";

function App() {

  

  return (
    <center className="row-container">
    <AppName />
    <AddTodo />
    <TodoItems/>
    </center>
  )
}

export default App
