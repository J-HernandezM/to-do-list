import { useNavigate } from 'react-router-dom'
import './TodoItem.css'
function TodoItem(props){
  const navigate = useNavigate()

  function checkTodo(checkThisID){
    const updatedTodos=[]
    props.todos.forEach((todo)=>{
      if(todo.id===checkThisID){
        todo.completed=true
        updatedTodos.push(todo)
      }else{
        updatedTodos.push(todo)
      }
    })
    props.setTodos(updatedTodos)
  }
  function  uncheckTodo(uncheckThisID){
    const updatedTodos=[]
    props.todos.forEach((todo)=>{
      if(todo.id===uncheckThisID){
        todo.completed=false
        updatedTodos.push(todo)
      }else{
        updatedTodos.push(todo)
      }
    })
    props.setTodos(updatedTodos)
  }
  function  deleteTodo(deleteThisID){
    const updatedTodos=[]
    props.todos.forEach((todo)=>{
      if(todo.id!==deleteThisID){
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
      <li id={props.todoID} className='todo'>
        <span className={`fa-regular fa-circle-check fa-lg icons check ${props.completed?"inactive":"check"}`} onClick={(event)=>{
          const todoID = event.target.parentElement.id
          checkTodo(todoID)
        }}></span>
        <span className={`fa-solid fa-circle-check fa-lg icons ${props.completed?"checked":"inactive"}`} style={{color: '#0268ee'}} onClick={(event)=>{
          const todoID = event.target.parentElement.id
          uncheckTodo(todoID)
        }}></span>
        <p className={`${props.completed?"task--completed":"task"}`}>{props.text}</p>
        <div className="rightButtons">
          <span className="fa-solid fa-pen-to-square fa-lg icons edit" onClick={
            ()=>{
              navigate(`/edit/${props.todoID}`)
            }
          }></span>
          <span className="fa-regular fa-circle-xmark fa-lg icons close" onClick={(event)=>{
            const todoID = event.target.parentElement.parentElement.id
            deleteTodo(todoID)
          }}></span>
        </div>
      </li>
    )
}
export  {TodoItem}