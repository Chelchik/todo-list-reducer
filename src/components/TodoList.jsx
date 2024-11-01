import React from 'react'
import Todo from './Todo'

function TodoList({todos, onCheck, onDelete}) {
  return (
   <div className='todo-list'>
        {
            todos.map((todo) => {
               return <Todo todo={todo} onCheck={onCheck} onDelete={onDelete} key={todo.id} />
            })
        }    
   </div> 
  )
}

export default TodoList