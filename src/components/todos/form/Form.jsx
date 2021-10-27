import React from 'react'
import { v4 as uuid } from "uuid";

export default class Form extends React.Component {
  
  state = {
      taskName: '',
      filter: ''
  };

  handleChange = (e) => {
    const {name, value} = e.currentTarget
    this.setState(
      {[name]: value})
  };

  resetForm = () => {
    this.setState({
      taskName: '',
    })
  }

  handleAddTask = () => {
    const newTodo = {
      id: uuid(),

    };
    this.setState((prevState) => ({
      items: [newTodo, ...prevState.items]
    }))
  
  }


  render() {

    return (
      <form>
        <label> Task name 
          <input
            type="text"
            name="taskName"
            className="form-control"
            onChange={this.handleChange} value={this.state.value} />
        </label>
        <button name="resetForm" onClick={this.resetForm}>Clear All</button>
      </form>
    )
  }
};

