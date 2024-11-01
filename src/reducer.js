import React from 'react'

function reducer(state, action) {
  if (action.type === "ADD_TODO") {
    return [
      ...state,
      action.payload
    ]
  } else if (action.type === "DELETE_TODO") {
    return state.filter((todo) => todo.id !== action.payload)
  } else if (action.type === "CHECK_TODO") {
    return state.map(todo => {
      if (todo.id === action.payload.id) {
        return action.payload;
      } else {
        return todo;
      }
    })
  } else if (action.type === "CLEAR_TODO") {
    return state.filter((todo) => !todo.isCompleted)
  }
}

export default reducer;