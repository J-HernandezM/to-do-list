import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text:'Cortar cebolla', completed: true},
  {text:'Montar Caballo', completed: false},
  {text:'Rotar pepino', completed: false},
  {text:'Peinar peludos', completed: true},
]

function App() {
  return (
    <>
      <TodoCounter total="10" completed="3"/> 
      <div className='wrap'>
        <TodoSearch />
        <CreateTodoButton />
      </div>

      <TodoList>
        {defaultTodos.map(todo=>{
          return(<TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}/>)
        })}
      </TodoList>

    </>
  );
}


export default App;
