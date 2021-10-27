import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodosList from './taskList/TaskList';
import Form from './form/Form'


export default class Todos extends Component {

  static defaultProps = {
  todos: [],
  };
  
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        important: PropTypes.bool.isRequired
      }))
  };

  state = {
    items: this.props.todos
  };

  render() {
    return (
    <div className = "flex-row" >
      <div className="col-8 offsset-5 mt-3">
          <h3>Hello</h3>
          <Form/>
          <TodosList items={this.state.items}/>
      </div>
    </div >

    )
}
}


