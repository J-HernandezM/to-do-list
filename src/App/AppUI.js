import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    setTodos,
    todos,
    found,
}){
    return(
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