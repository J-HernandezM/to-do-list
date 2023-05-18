import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import { CreateTodo } from '../CreateTodo';

function AppUI(){
  //Con esta sintaxis usamos el Hook de context con las propiedades que AppUI consume
  const {
    loading,
    error,
    setTodos,
    todos,
    found,
    modalOn,
  } = React.useContext(TodoContext)
    return(
        <>
            <TodoCounter/> 
            <div className='wrap'>
              <TodoSearch/>
              <CreateTodoButton/>
              {modalOn && 
                <Modal>
                  <CreateTodo/>
                </Modal>}
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
              {(!loading && todos.length===0) && <TodosEmpty />}

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