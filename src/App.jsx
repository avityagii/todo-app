import AppName from "./components/AppName"
import './App.css';
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";

function App() {

  const todoItems = [
    {
      name:"Buy Milk",
      dueDate:"04/10/2025"
    },
    {
      name:"Go To School",
      dueDate:"04/10/2025"
    }
  ]
  

  return (
    <center>
    <AppName />
    <AddTodo />
    <TodoItems todoItems = {todoItems} />
    </center>
  )
}

export default App
