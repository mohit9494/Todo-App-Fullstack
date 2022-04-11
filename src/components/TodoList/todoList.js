import React, { Component, useState } from 'react';
import './todoList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Modal.css";


const Todo = props => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Task Info</h2>
            <br />

            <p>Title: {props.todo.title}</p>
            <br />
            <p>Description: {props.todo.description}</p>
            <br />
            <p>Status: {props.todo.isCompleted ? "Done" : "Incomplete"}</p>
            <br />
            <p>TaskId: {props.todo.id}</p>
            <br />
            <p>CreatedDate: {props.todo.createdDate}</p>
            <br />
            <p>ModifiedDate: {props.todo.modifiedDate}</p>
            <br />
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}

      <tr>
        <td>{props.todo.title}</td>
        <td>{props.todo.createdDate.substring(0, 10)}</td>
        <td>{props.todo.modifiedDate.substring(0, 10)}</td>
        <td>
          <button className='ib' to="#" onClick={toggleModal}>Info</button> | <Link to={"/edit/" + props.todo._id}><button type="button">Edit</button></Link> | <button className='db' to="#" onClick={() => { props.deleteTodo(props.todo._id) }}>Delete</button> | <label>Done &nbsp;
            <input type="checkbox" checked={!!props.todo.isCompleted} onChange={() => props.markComplete(props.todo)} />
          </label>
        </td>
      </tr>
    </>)
}

export default class todoList extends Component {

  constructor(props) {

    super(props);

    this.markComplete = this.markComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.state = { todoList: [] };
  }

  componentDidMount() {

    axios.get('http://localhost:5001/todo/')
      .then(response => {
        this.setState({ todoList: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  //markCompleted
  markComplete(todo) {

    todo.isCompleted = !todo.isCompleted;
    console.log(todo);

    axios
      .put("http://localhost:5001/todo/" + todo.id, todo)
      .then((res) => console.log(res.data));

  }

  // Delete Todo
  deleteTodo(id) {

    axios.delete('http://localhost:5001/todo/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      todoList: this.state.todoList.filter(el => el._id !== id)
    })
  }

  // Populate ToDo
  todoList() {
    return this.state.todoList.map(td => {
      return <Todo todo={td} deleteTodo={this.deleteTodo} key={td._id} markComplete={this.markComplete} />;
    })
  }

  render() {
    return (
      <div className='center'>
        <h1>Logged Tasks</h1>

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>CreatedDate</th>
              <th>ModifiedDate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.todoList()}
          </tbody>
        </table>
      </div>
    )
  }
}



