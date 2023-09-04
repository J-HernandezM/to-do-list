import React from 'react';
import './TodoSearch.css'
import { useSearchParams } from 'react-router-dom';
function TodoSearch({searchValue, setSearchValue}){
    let [searchParams, setSearchParams] = useSearchParams();
    return(
        <input placeholder="Busca un to-do" className="searchbar todoInput" value={searchValue} onChange={(event)=>{
            setSearchValue(event.target.value)
            setSearchParams({search: event.target.value})
        }}/>
    )
}
export {TodoSearch}