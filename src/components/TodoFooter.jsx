import React from 'react'

function TodoFooter({todos, clearCompleted}) {
    const completedTodo = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className='todo-footer'>
        <p>{completedTodo}/{todos.length}</p>

        <button onClick={clearCompleted} className='clear-btn'>Clear completed</button>
    </div>
  )
}

export default TodoFooter