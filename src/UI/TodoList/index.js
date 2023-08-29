import './TodoList.css'
function TodoList(props){
    return(
        <ul className='todosList'>
            {/* Aplicamos nuestras render props */}
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(props.todos.length===0 && !props.loading ) && props.onEmpty()}
            {(props.todos.length>0 && props.found.length===0) && props.onEmptySearch(props.searchValue)}
            {/* Renderizamos ahora si el contenido */}
            {!props.loading && props.found.map(props.render || props.children)} {/* Al hacer map ya directamente envia su resultado al props.render */}
        </ul>
    )
}

export {TodoList}