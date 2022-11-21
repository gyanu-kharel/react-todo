import React, { useEffect } from 'react'

export default function TodoList(props) {

    const onDelete = (todo) => {
        props.onTodoDelete(todo)
    }
  return (
    <div>
        <ul>
            {
                props.todos.map((todo) => {
                    return (
                    <li key={todo.key} onClick = {() => onDelete(todo)}>
                        {todo.isDeleted === true ? <del>{todo.item}</del> : todo.item}
                    </li>
                    );
                })
            }
        </ul>
    </div>
  )
}
