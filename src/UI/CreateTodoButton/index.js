import React from 'react';
import './CreateTodoButton.css'
import { useNavigate } from 'react-router-dom';

function CreateTodoButton(){
    const navigate = useNavigate()
    return(
        <span className="fa-solid fa-circle-plus fa-2xl btn" onClick={()=>{navigate('/new')}}></span>
    )
}
export {CreateTodoButton}