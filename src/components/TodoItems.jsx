import TodoItem from "./TodoItem"

function TodoItems(todoItems) {
  return (
    <div className="items-container">
    {todoItems.map((item,index) => (<TodoItem key={index} todoItem={item.name} todoDate={item.duedate}/>))}
    </div>
  )
}

export default TodoItems