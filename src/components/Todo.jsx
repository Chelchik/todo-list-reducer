import React from 'react'

function Todo({todo, onDelete, onCheck}) {
    
  return (
    <div className="todo">
        <input type="checkbox" id={todo.id} checked={todo.isCompleted} onChange={e => onCheck({
            ...todo, 
            isCompleted: e.target.checked
        })} />

        <label htmlFor={todo.id}>{todo.title}</label>

        <button className='delete-btn' onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  )
}

export default Todo