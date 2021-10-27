import React, { Component } from 'react'
import { RiDeleteBin5Line, RiAlertLine, RiCheckFill } from "react-icons/ri";

export default class Todos extends Component {

  state = {
    items: this.props.items,
  };


  handleDeleteItem = (id) => {
    this.setState ((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id)
    }))
  };

  toggleItemProperty = (id, e) => {
    const { name } = e.currentTarget;
    this.setState((prevState) => {
      let newItem = prevState.items.map(
        (item) => (item.id === id) ?
          { ...item, [name] : !item[name] } :
          { ...item }
      );
      return { items: newItem }
    })
  }


  render() {
    const { items } = this.state;
    const todosCount = items.length;
    const importantCount = items.reduce( (acc, items) => items.important ? acc+1 : acc, 0)
  return (
    <>
    <div className="d-flex">
      <span className=" ms-2 me-4">Total: {todosCount}</span><span>Important:{importantCount}</span>
    </div>
    <ul className="list-group">
            {items.map(
              ({ id, label, completed, important }) => (
                <li key={id} className={
                    ('list-group-item ') + (
                    completed ? 'bg-light' :
                    important ? ' text-danger border border-danger ' :
                    '')}>
                <div className="d-flex justify-content-between ">
                  <h2 className={
                    completed ? 'text-muted text-decoration-line-through' : ''}>{label}</h2>
                  <div>
                      {completed !== true &&
                        <button
                        name="important"
                          onClick={(e) => this.toggleItemProperty(id, e)}
                          className={('btn mx-1 ') + (important ? 'text-muted' : 'btn-outline-warning')}
                        >
                        <RiAlertLine />
                        </button>
                        }

                      <button
                        name="completed"
                        onClick={(e) => this.toggleItemProperty(id, e)}
                        className={('btn mx-1 ') + (completed ? 'text-muted' : 'btn-outline-success')}
                      >
                        <RiCheckFill />
                      </button>

                      <button
                        onClick={() => this.handleDeleteItem(id)}
                        className="btn btn-outline-danger  ms-4"
                      >
                        <RiDeleteBin5Line />
                      </button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
    </>
  )

}
} 