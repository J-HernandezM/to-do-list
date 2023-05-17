import React from "react"
import { TodoContext } from "../TodoContext"
import './CreateTodo.css'
import '../TodoSearch/TodoSearch.css'
import '../CreateTodoButton/CreateTodoButton.css'

function CreateTodo(){
    const {setModalOn} = React.useContext(TodoContext)
    return(
        <form className="createBox">
            <input type="text" className="createBox__newTodo todoInput" placeholder="Agrega un to-do"/>
            <div className="modalButtonBox">
                <button type="button" className="modalBtn" onClick={()=>{setModalOn(false)}}>
                    <span className="modalTextButtons modalCancel">Cancelar</span>
                </button>
                <button type="button" className="modalBtn" onClick={()=>{setModalOn(false)}}>
                    <span className="modalTextButtons modalAdd">Completar</span>
                </button>
            </div>
        </form>
    )
}
export {CreateTodo}