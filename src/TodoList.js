import './TodoList.css'
function TodoList(props){
    return(
        <ul className='todosList'>
            {props.children}
        </ul>
    )
}

export {TodoList}