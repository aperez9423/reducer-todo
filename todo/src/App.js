import React, { useReducer } from 'react';
import './App.css';

import TodoForm from './components/TodoForm.js'
import TodoList from './components/TodoList.js'

import {todoReducer, initialState} from './reducers/ToDo-Reducer.js';

import styled from 'styled-components';

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
    dispatch({type: 'TOGGLE_COMPLETED', payload: id})
  }

  const clearCompleted = () => {
    dispatch({type: 'CLEAR_COMPLETED'})
  }

  return (
    <AppContainer>
      <h1>To Do List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList state={state} handleCompleted={handleCompleted}/>
      <ButtonContainer>
        <button className='clear-btn'
          onClick={(e) => {
            e.preventDefault();
            clearCompleted();
          }}>
            Clear Completed
          </button>
      </ButtonContainer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div `
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: white
  }

  button {
    font-weight: bolder;
    font-size: 1.2rem;
    border-radius: .5rem;
    border: .2rem solid black;
  }
`
const ButtonContainer = styled.div `
    background-color: gray;
    border-top: .2rem solid purple;
    border-bottom: .2rem solid purple;
    padding-top: .5rem;
    padding-bottom: .5rem;
`