import { Header } from "./Components/Header"
import { Tabs } from "./Components/Tabs"
import { TodoInput } from "./Components/TodoInput"
import { TodoList } from "./Components/TodoList"

import { useState, useEffect } from 'react'

function App() {

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true }
  ])
  const [selectedTab, setSelectedTab] = useState('All')

  function handleaddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }]
    setTodos(newTodoList)
    saveTodosToLocalStorage(newTodoList);
 
  }

function handleEditTodo(index) {


  const newTodoList = [...todos];
  const completedTodo = { ...todos[index], complete: true }; // make a copy
  newTodoList[index] = completedTodo;
  setTodos(newTodoList);
  saveTodosToLocalStorage(newTodoList);
}



  function handledeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    saveTodosToLocalStorage(newTodoList);
  }

  function saveTodosToLocalStorage(currentTodos) {
    localStorage.setItem('todos-app', JSON.stringify({ todos: currentTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todos-app')) { return }

       let db = JSON.parse(localStorage.getItem('todos-app'))
       setTodos(db.todos)
       
  }, [])

  return (
    <>
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList handleEditTodo={handleEditTodo} handledeleteTodo={handledeleteTodo} selectedTab={selectedTab} todos={todos} />
      <TodoInput handleaddTodo={handleaddTodo} />
    </>
  )
}

export default App