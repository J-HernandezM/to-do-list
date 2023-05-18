import React from "react"
import { TodoContext } from "../TodoContext"
import './CreateTodo.css'
import '../TodoSearch/TodoSearch.css'
import '../CreateTodoButton/CreateTodoButton.css'

function CreateTodo(){
    const {setModalOn, addNewTodo} = React.useContext(TodoContext)
    const [newTodoText, setNewTodoText] = React.useState('') 
    
    return(
        <form className="createBox" onSubmit={(event)=>{
            event.preventDefault();
        }}>
            <input type="text" className="createBox__newTodo todoInput" placeholder="Agrega un to-do" onChange={(event)=>{setNewTodoText(event.target.value)}} onKeyUp={
                (event)=>{
                    if(event.code==='Enter'){
                        addNewTodo(newTodoText)
                        setModalOn(false)
                    }
                }
            }/>
            <div className="modalButtonBox">
                <button type="button" className="modalBtn" onClick={
                    ()=>{
                        setModalOn(false)
                        }}>

                    <span className="modalTextButtons modalCancel">Cancelar</span>
                </button>
                <button type="button" className="modalBtn" onClick={
                    ()=>{
                        addNewTodo(newTodoText)
                        setModalOn(false)
                        
                        }}>

                    <span className="modalTextButtons modalAdd">Completar</span>
                </button>
            </div>
        </form>
    )
}
export {CreateTodo}