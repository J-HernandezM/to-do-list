import React from 'react';
import { useTodo } from '../useTodo';
import { TodoCounter } from '../../UI/TodoCounter';
import { TodoSearch } from '../../UI/TodoSearch';
import { TodoList } from '../../UI/TodoList';
import { TodoItem } from '../../UI/TodoItem';
import { CreateTodoButton } from '../../UI/CreateTodoButton';
import { TodosLoading } from '../../UI/TodosLoading';
import { TodosError } from '../../UI/TodosError';
import { TodosEmpty } from '../../UI/TodosEmpty';
import { Modal } from '../../UI/Modal';
import { CreateTodo } from '../../UI/CreateTodo';
import { SearchEmpty } from '../../UI/TodosEmpty/SearchEmpty';
import { ChangeAlertWithListener } from '../../UI/ChangeAlert';
 // eslint-disable-next-line
const defaultTodos = [
  {text:'Cortar cebolla', completed: true},
  {text:'Montar Caballo', completed: false},
  {text:'Rotar manzanas', completed: false},
  {text:'Peinar peludos', completed: true},
]


function Homepage() {
  const {
    loading,
    error,
    setTodos,
    todos,
    found,
    searchValue, 
    setSearchValue,
    totalTodos:total,
    completedTodos:completed,
    synchronize
  } = useTodo()

  return (
          <>
            <TodoCounter
              total={total}
              completed={completed}
            /> 
            <div className='wrap'>
              <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
              <CreateTodoButton/>
            </div>
            {/* Aplicamos render props a TodoList */}   
            <TodoList 
              error={error}
              loading={loading}
              searchValue={searchValue}
              todos={todos}
              found={found}
              onError={()=><TodosError/>}
              onLoading={()=>
                <>
                    <TodosLoading/>
                    <TodosLoading/>
                    <TodosLoading/>
                </>
              }
              onEmpty={()=><TodosEmpty/>}
              onEmptySearch={(search)=><SearchEmpty search={search}/>}
              render={todo=>
                <TodoItem
                  setTodos={setTodos}
                  todos={todos} 
                  key={todo.id} 
                  todoID={todo.id}
                  text={todo.text} 
                  completed={todo.completed}/>
                }
            />
            <ChangeAlertWithListener synchronize={synchronize} />     
        </>
  );
}
export default Homepage;