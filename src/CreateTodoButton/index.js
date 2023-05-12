import './CreateTodoButton.css'
function CreateTodoButton(){
    return(
        <span className="fa-solid fa-circle-plus fa-2xl btn" onClick={(event)=>{
            console.log('Vas a anadir un nuevo todo');
        }}></span>
    )
}
export {CreateTodoButton}