import './TodoItem.css'
function TodoItem(props){
  function checkTodo(checkThis){
    const updatedTodos=[]
    props.todos.forEach((todo)=>{
      if(todo.text===checkThis){
        todo.completed=true
        updatedTodos.push(todo)
      }else{
        updatedTodos.push(todo)
      }
    })
    props.setTodos(updatedTodos)
  }
  function  uncheckTodo(uncheckThis){
    const updatedTodos=[]
    props.todos.forEach((todo)=>{
      if(todo.text===uncheckThis){
        todo.completed=false
        updatedTodos.push(todo)
      }else{
        updatedTodos.push(todo)
      }
    })
    props.setTodos(updatedTodos)
  }
  function  deleteTodo(deleteThis){
    const updatedTodos=[]
    props.todos.forEach((todo)=>{
      if(todo.text!==deleteThis){
        updatedTodos.push(todo)
      }
    })
    props.setTodos(updatedTodos)
  }
  // function saveTodo(newTodoArray){
  //   const stringedArray = JSON.stringify(newTodoArray)
  //   localStorage.setItem("TODOS_V1", stringedArray)
  //   props.setTodos(newTodoArray) 
  // }
    return(
      <li className='todo'>
        <span className={`fa-regular fa-circle-check fa-lg icons check ${props.completed?"inactive":"check"}`} onClick={(event)=>{
          const message = event.target.parentElement.childNodes[2].textContent
          checkTodo(message)
        }}></span>
        <span className={`fa-solid fa-circle-check fa-lg icons ${props.completed?"checked":"inactive"}`} style={{color: '#0268ee'}} onClick={(event)=>{
          const message = event.target.parentElement.childNodes[2].textContent
          uncheckTodo(message)
        }}></span>
        <p className={`${props.completed?"task--completed":"task"}`}>{props.text}</p>
        <span className="fa-regular fa-circle-xmark fa-lg icons close" onClick={(event)=>{
          const message = event.target.parentElement.childNodes[2].textContent
          deleteTodo(message)
        }}></span>
      </li>
    )
}
export  {TodoItem}