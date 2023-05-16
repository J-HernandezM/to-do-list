import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { TodoContext } from '../TodoContext';

function AppUI(){
  //Con esta sintaxis usamos el Hook de context con las propiedades que AppUI consume
  const {
    loading,
    error,
    setTodos,
    todos,
    found,
  } = React.useContext(TodoContext)
    return(
        <>
            <TodoCounter/> 
            <div className='wrap'>
              <TodoSearch/>
              <CreateTodoButton />
            </div>         
            <TodoList>
              {loading && 
                <>
                  <TodosLoading />
                  <TodosLoading />
                  <TodosLoading />
                </>
              }
              {error && <TodosError />}
              {(!loading && todos.lenght===0) && <TodosEmpty />}

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
    )
}
export{AppUI}