import React from 'react';

import styled from 'styled-components';

function Todo (props) {
    console.log(props);

    return(
        <TodoContainer>
            <h3 className= {props.item.completed ? 'completed' : ''}
            onClick={(e) => {
                e.preventDefault();
                props.handleCompleted(props.item.id);
            }}> {props.item.todo}
            </h3>
        </TodoContainer>
    )
}

export default Todo;

const TodoContainer = styled.div `
    color: black;
    width: 50%;

    h3 {
        font-size: 1.5rem;
        background-color: lightgray;
        margin: 1rem;  
        border: .2rem solid black;
        border-radius: 1rem;
        padding-top: .5rem;  
        padding-bottom: .5rem; 
    }
`