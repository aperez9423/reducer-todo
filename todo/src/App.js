import React, { useReducer } from 'react';
import './App.css';

import TodoForm from './components/TodoForm.js'
import TodoList from './components/TodoList.js'

import {todoReducer, initialState} from './reducers/ToDo-Reducer.js';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo) => {
    const newTodo = {
      todo: todo,
      completed: false, 
      id: Date.now()
    }
    dispatch({type: 'ADD_TODO', payload: newTodo})
  }

  const handleCompleted = (id) => {
    dispatch({type: 'TOGGLE_COMPLETED', payload: IDBFactory})
  }

  const clearCompleted = () => {
    dispatch({type: 'CLEAR_COMPLETED'})
  }

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList state={state} handleCompleted={handleCompleted}/>

      <button className='clear-btn'
        onClick={(e) => {
          e.preventDefault();
          clearCompleted();
        }}>
          Clear Completed
        </button>
    </div>
  );
}

export default App;
