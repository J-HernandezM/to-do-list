import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoCounter.css'
function TodoCounter(){
    //Con esta sintaxis usamos el Hook de context con las propiedades que TodoCounter consume
    const {
        totalTodos:total,
        completedTodos:completed
    } = React.useContext(TodoContext)
    return(
        <h1 className="counter">Has completado <span className="counter__numbers">{completed}</span> de <span className="counter__numbers">{total}</span> todo's</h1>
    )
}
export {TodoCounter}