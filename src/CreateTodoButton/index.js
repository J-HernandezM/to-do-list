import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css'

function CreateTodoButton(){
    const {setModalOn} = React.useContext(TodoContext)
    return(
        <span className="fa-solid fa-circle-plus fa-2xl btn" onClick={()=>{setModalOn(true)}}></span>
    )
}
export {CreateTodoButton}