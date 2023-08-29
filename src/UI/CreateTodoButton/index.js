import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton({setModalOn}){
    return(
        <span className="fa-solid fa-circle-plus fa-2xl btn" onClick={()=>{setModalOn(true)}}></span>
    )
}
export {CreateTodoButton}