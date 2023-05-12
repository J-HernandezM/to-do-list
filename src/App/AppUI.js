import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
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