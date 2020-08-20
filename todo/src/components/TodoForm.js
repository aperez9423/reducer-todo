import React, { useState } from 'react';
import styled from 'styled-components';

export function TodoForm(props) {
    const [input, setInput] = useState ('');

    const submitHandler = e => {
        console.log('Submitted!')
        e.preventDefault();
        props.addTodo(input);
        setInput('');
    }

    return (
        <FormContainer>
            <form onSubmit={submitHandler}>
                <input 
                    type='text'
                    name='todo'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button type='submit'>Add Todo</button>
            </form>
        </FormContainer>
    )
}

export default TodoForm;

const FormContainer = styled.div `
    background-color: gray;
    border-top: .2rem solid purple;
    border-bottom: .2rem solid purple;

    input {
        font-size: 1.2rem;
        border: .2rem solid black;
        margin: .5rem;
    }

    button {
        font-weight: bolder;
        font-size: 1.2rem;
        border-radius: .5rem;
        border: .2rem solid black;
    }
`