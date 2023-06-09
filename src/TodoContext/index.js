import React from "react"
import { useLocalStorage } from "./useLocalStorage"


//Creamos y nombramos este contexto
const TodoContext = React.createContext()

function TodoProvider({children}){
    //En el provider definimos toda la logica global de este contexto
    //cambiamos el usestate por nuestro customhook al cual le asignaremos todos a items y setTodos a saveItem
    const {
    items: todos, 
    saveItem:setTodos, 
    loading, 
    error
    } = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = React.useState('')
    const [modalOn, setModalOn] = React.useState(false)
    //Contando todos
    //length de un nuevo array que contenga los todos con completed true
    const completedTodos = todos.filter(todo=>todo.completed).length
    const totalTodos = todos.length
    //Buscando todos
    // eslint-disable-next-line
    const found = todos.filter((todo)=>{
    if(searchValue!==''){
        if(todo.text.toLowerCase().includes(searchValue.toLowerCase())){
        return todo
        }
    }else{return todo}
    })
    
    function addNewTodo(newTodotxt){
        const newTodo = {text: newTodotxt, completed: false}
        const updateThisArray = [...todos]
        updateThisArray.push(newTodo)
        setTodos(updateThisArray)
    }

    return(
        //En value le pasamos las props que queremos que sean globales
        //El children es para decirle que lo que le pasemos como hijo sera metido dentro del TodoContext.Provider
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            setTodos,
            todos,
            found,
            modalOn,
            setModalOn,
            addNewTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}