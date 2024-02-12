import { useState } from 'react'
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'
import './App.css'


function App() {

  return (
    <>
      <h1 className='italic'>(Use of Redux ToolKit)</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
