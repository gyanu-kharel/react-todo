import React from 'react'
import { useRef } from 'react';


export default function (props){
    const inputRef = useRef(null);

    const onAdd = (event) => {
        event.preventDefault();
        const { value } = inputRef.current;
        props.onTodoAdd(value);
        inputRef.current.value = "";
    }


  return (
    <div>
        <form onSubmit={onAdd}>
            <input ref={inputRef} type="text" />
            <button type="submit" >Add</button>
        </form>
    </div>
  )
}
