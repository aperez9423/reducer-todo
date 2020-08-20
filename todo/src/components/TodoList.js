import React from 'react';

import Todo from './Todo.js'

import styled from 'styled-components';

function TodoList (props) {

    return (
        <ToDoListContainer>
            {props.state.map((item) => {
                return <Todo item={item} key={item.id} handleCompleted={props.handleCompleted}/>
            })}
        </ToDoListContainer>
    )
}

export default TodoList;

const ToDoListContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 auto;
`

