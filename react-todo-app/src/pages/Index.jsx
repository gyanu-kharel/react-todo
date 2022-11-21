import React from 'react'
import { useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

export default function Index() {
    const [todos, setTodos] = useState([])


    const onAddHandler = (value) =>{
        const todoObj = {
            item : value,
            key : Date.now(),
            isDeleted : false
        }
        setTodos([...todos, todoObj]);
    }

    const onTodoDelete = (todo) => {
        const index = todos.findIndex(i => i.key === todo.key);
        todos[index].isDeleted = true;
        setTodos([...todos]);
    }

  return (
    <div>
        <TodoForm onTodoAdd = {onAddHandler} />
        <TodoList todos = {todos} onTodoDelete = {onTodoDelete} />
    </div>
  )
}
