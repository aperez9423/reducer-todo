import React from 'react';

function Todo (props) {
    console.log(props);

    return(
        <div className="todo">
            <h3 className= {props.item.completed ? 'completed' : ''}
            onClick={(e) => {
                e.preventDefault();
                props.handleCompleted(props.item.id);
            }}> {props.item.todo}
            </h3>
        </div>
    )
}

export default Todo;