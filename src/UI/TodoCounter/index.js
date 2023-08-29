import React from 'react'
import './TodoCounter.css'
function TodoCounter({total, completed}){
    return(
        <h1 className="counter">Has completado <span className="counter__numbers">{completed}</span> de <span className="counter__numbers">{total}</span> todo's</h1>
    )
}
export {TodoCounter}