import React from 'react';
import Todo from './Todo.js'

function TodoList (props) {

    return (
        <div className='todo-list'>
            {props.state.map((item) => {
                return <Todo item={item} key={item.id} handleCompleted={props.handleCompleted}/>
            })}
        </div>
    )
}

export default TodoList;