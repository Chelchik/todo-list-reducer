import React from 'react'
import { useState } from 'react';

function Form({onAdd}) {
  const [text, setText] = useState("");

    const handeInputValue = (e) => {
        setText(e.target.value);
    }

    const addTodoFunc = (e) => {
        e.preventDefault();
        onAdd(text)
        setText("")
    }

  return (
    <form onSubmit={addTodoFunc}>
        <input type="text" placeholder='Add todo' id='add-todo' onChange={handeInputValue} value={text} />

        <input type="submit" value="Add" id='submit' />
    </form>
  )
}

export default Form