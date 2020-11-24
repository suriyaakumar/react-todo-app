import React from 'react';

const Todos = ({todos, deleteTodo}) => {    
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item row" key={todo.id}>
                   <span class="col s11">{todo.content}</span>
                   <i className="material-icons col s1" onClick={() => {deleteTodo(todo.id)}}>delete</i>         
                </div>
            )
        })
    ) : (
    <p className="center">You have no tasks left to do. Add something to get started</p>
    )
    return (
        <div className="todos collection">
           {todoList}
        </div>
    )
}

export default Todos;