import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
      content: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        });
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                  <div className="row input-field">
                  <label for="task">Add a new task</label>   
                  <input type="text" id="task"  onChange={this.handleChange} value={this.state.content}></input>
                  </div>
                  <div class="row">
                  <button className="col s4 offset-s4 btn-large blue" onClick={this.addtodo}> ADD</button>  
                  </div>
                </form>
            </div>
        )
    }
}

export default AddTodo;