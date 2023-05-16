import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
 // eslint-disable-next-line
const defaultTodos = [
  {text:'Cortar cebolla', completed: true},
  {text:'Montar Caballo', completed: false},
  {text:'Rotar manzanas', completed: false},
  {text:'Peinar peludos', completed: true},
]

function App() {
  return (
    //El Provider es para decirle que a este componente children le pasaremos nuestras nuevas propiedades globales
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
export default App;