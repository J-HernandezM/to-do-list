import React from 'react';
import './TodoSearch.css'
function TodoSearch({searchValue, setSearchValue}){
    return(
        <input placeholder="Busca un to-do" className="searchbar" value={searchValue} onChange={(event)=>{
            setSearchValue(event.target.value)
        }}/>
    )
}
export {TodoSearch}