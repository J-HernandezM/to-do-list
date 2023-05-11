import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text:'Cortar cebolla', completed: true},
  {text:'Montar Caballo', completed: false},
  {text:'Rotar manzanas', completed: false},
  {text:'Peinar peludos', completed: true},
  {text:'Coortar cebolla', completed: true},
  {text:'Moontar Caballo', completed: false},
  {text:'Rootar manzanas', completed: false},
  {text:'Peeinar peludos', completed: true},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')
  //Contando todos
  //length de un nuevo array que contenga los todos con completed true
  const completedTodos = todos.filter(todo=>todo.completed).length
  const totalTodos = todos.length
  //Buscando todos
  const found = todos.filter((todo)=>{
    if(searchValue!=''){
      if(todo.text.toLowerCase().includes(searchValue.toLowerCase())){
        return todo
      }
    }else{return todo}
  })

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos}/> 
      <div className='wrap'>
        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
        />
        <CreateTodoButton />
      </div>

      <TodoList>
        {found.map(todo=>{
          return(<TodoItem
            setTodos={setTodos}
            todos={todos} 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}/>)
        })}
      </TodoList>

    </>
  );
}


export default App;
