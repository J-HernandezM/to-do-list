import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Home/Homepage';
import { EditTodoPage } from './Edit/EditTodoPage'
import { NewTodoPage } from './New/NewTodoPage'
import { NotFoundPage } from './NotFound/NotFoundPage';
function App() {
  return (
          <HashRouter>
            <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/new' element={<NewTodoPage />}></Route>
                <Route path='/edit/:slug' element={<EditTodoPage />}></Route>
                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
          </HashRouter>
  )
}
export default App;