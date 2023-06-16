import React from 'react';
import { useTodo } from './useTodo';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { Modal } from '../Modal';
import { CreateTodo } from '../CreateTodo';
import { SearchEmpty } from '../TodosEmpty/SearchEmpty';
import { ChangeAlertWithListener } from '../ChangeAlert';
 // eslint-disable-next-line
const defaultTodos = [
  {text:'Cortar cebolla', completed: true},
  {text:'Montar Caballo', completed: false},
  {text:'Rotar manzanas', completed: false},
  {text:'Peinar peludos', completed: true},
]


function App() {
  const {
    loading,
    error,
    setTodos,
    todos,
    found,
    modalOn,
    searchValue, 
    setSearchValue,
    totalTodos:total,
    completedTodos:completed,
    setModalOn, 
    addNewTodo,
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
              <CreateTodoButton 
              setModalOn={setModalOn}
              />
              {modalOn && 
                <Modal>
                  <CreateTodo               
                    setModalOn ={setModalOn}
                    addNewTodo ={addNewTodo}/>
                </Modal>}
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
                  key={todo.text} 
                  text={todo.text} 
                  completed={todo.completed}/>
                }
            />
            <ChangeAlertWithListener synchronize={synchronize} />     
        </>
  );
}
export default App;