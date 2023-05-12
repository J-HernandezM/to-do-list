import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
 // eslint-disable-next-line
const defaultTodos = [
  {text:'Cortar cebolla', completed: true},
  {text:'Montar Caballo', completed: false},
  {text:'Rotar manzanas', completed: false},
  {text:'Peinar peludos', completed: true},
]

function App() {
  //cambiamos el usestate por nuestro customhook al cual le asignaremos todos a items y setTodos a saveItem
  const [todos, setTodos] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')
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

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      setTodos={setTodos}
      todos={todos}
      found={found}
    />
  );
}
export default App;