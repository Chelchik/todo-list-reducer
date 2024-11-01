import logo from './logo.svg';
import './App.css';
import { useReducer} from 'react';
import reducer from './reducer';
import Form from './components/Form';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

function App() {
  const [state, dispatch] = useReducer(reducer, [
    {id: 1, title: "HTML, CSS", isCompleted: false},
    {id: 2, title: "JavaScript", isCompleted: false},
    {id: 3, title: "React", isCompleted: false}
  ])

  let lastTodosId = state.length;
  
  const addTodo = (title) => {
   dispatch ({
    type: "ADD_TODO",
    payload: {
      id: ++lastTodosId, 
      title: title, 
      isCompleted: false
    }
  })
  }

  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id
    })
  }

  const checkTodo = (nextTodo) => {
    dispatch({
     type: "CHECK_TODO",
     payload: nextTodo
    })
  }

  const clearCompletedFunc = () => {
    dispatch({
      type: "CLEAR_TODO",
      payload: undefined
    })
  }

  return (
    <div className="root">
      <div className='todo-box'>
      <Form onAdd={addTodo} />

      <TodoList todos={state} onDelete={deleteTodo} onCheck={checkTodo} />

      <TodoFooter todos={state} clearCompleted={clearCompletedFunc} />
      </div>
    </div>
  );
}

export default App;
