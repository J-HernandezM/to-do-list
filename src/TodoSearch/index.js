import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';
function TodoSearch(){
    //Con esta sintaxis usamos el Hook de context con las propiedades que TodoSearch consume
    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    return(
        <input placeholder="Busca un to-do" className="searchbar" value={searchValue} onChange={(event)=>{
            setSearchValue(event.target.value)
        }}/>
    )
}
export {TodoSearch}