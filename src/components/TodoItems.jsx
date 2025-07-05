import TodoItem from "./TodoItem"

function TodoItems() {
  const itemLists = [
    {
      name:"Buy Milk",
      dueDate:"04/10/2025"
    },
    {
      name:"Go To School",
      dueDate:"04/10/2025"
    }
  ]
  const items = itemLists.map((item,index) => <TodoItem key={index} todoItem={item.name} todoDate={item.dueDate}/>);

  return (
     <div className="items-container">{items}</div>
  )
}

export default TodoItems