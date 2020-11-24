import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './addform';

class App extends Component {
state = {
  todos: []
}
deleteTodo = (id) => {
  const todos = this.state.todos.filter(todo => {
    return todo.id !== id
  });
  this.setState({
    todos
  })
}
addTodo = (todo) => {
 todo.id = Math.random();
 let todos = [...this.state.todos, todo];
 this.setState({
   todos
 })
}
render() {
  return(
     <div className="todo-app container">
        <h1 className="center blue-text">TO-DO</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
     </div>
  )
}
}

export default App;
