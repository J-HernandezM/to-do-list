import './TodoSearch.css'
function TodoSearch(){
    return(
        <input placeholder="Busca un to-do" className="searchbar" onChange={(event)=>{
            let userSearch=event.target.value
            console.log(userSearch);
        }}/>
    )
}
export {TodoSearch}