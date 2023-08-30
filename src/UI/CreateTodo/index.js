import React, { useEffect, useRef } from "react"
import './CreateTodo.css'
import '../TodoSearch/TodoSearch.css'
import '../CreateTodoButton/CreateTodoButton.css'
import { useNavigate } from "react-router-dom"
import { useTodo } from "../../Routes/useTodo"

function CreateTodo({title, action, currentID}){
    const {addNewTodo, editCurrentTodo, todos, loading} = useTodo()
    const navigate = useNavigate()
    const [newTodoText, setNewTodoText] = React.useState('') 

    const currentTodo = todos.find((todo)=>{
        if(todo.id===currentID){
            return todo
        }
    }) 
    const myInputRef = useRef(null)
    if(currentTodo){
        myInputRef.current.defaultValue = currentTodo.text
    }

    return(
        <form className="createBox" onSubmit={(event)=>{
            event.preventDefault();
        }}>
            <input 
                ref={myInputRef}
                type="text" 
                className="createBox__newTodo todoInput" 
                placeholder={`${title}`} 
                onChange={(event)=>{setNewTodoText(event.target.value)}} onKeyUp={
                    (event)=>{
                        if(event.code==='Enter'){
                            action==='edit'?editCurrentTodo(currentID, newTodoText):addNewTodo(newTodoText)
                            navigate('/')
                        }
                    }
            }/>
            <div className="modalButtonBox">
                <button type="button" className="modalBtn" onClick={
                    ()=>{
                        navigate('/')
                        }}>

                    <span className="modalTextButtons modalCancel">Cancelar</span>
                </button>
                <button disabled={loading} type="button" className="modalBtn" onClick={
                    ()=>{
                        action==='edit'?editCurrentTodo(currentID, newTodoText):addNewTodo(newTodoText)
                        navigate('/')
                        }}>

                    <span className="modalTextButtons modalAdd">Completar</span>
                </button>
            </div>
        </form>
    )
}
export {CreateTodo}