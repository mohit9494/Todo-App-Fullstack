import React, { Component } from "react";
import "./createTodo.css";
import axios from "axios";

export default class createTodo extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      description: "",
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const todo = {
      title: this.state.title,
      description: this.state.description,
    };

    console.log(todo);

    axios
      .post("http://localhost:5001/todo/", todo)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div className="center">
        <h1>Add New Task</h1>
        <div className="formContainer">
          <form onSubmit={this.onSubmit}>
            <label for="title">Title</label>
            <input
              required
              value={this.state.title}
              onChange={this.onChangeTitle}
              type="text"
              id="title"
              name="title"
              placeholder="Enter Task Title..."
            />

            <label for="desc">Description</label>
            <textarea
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
              id="desc"
              name="desc"
              placeholder="Enter Task Description..."
            ></textarea>

            <input type="submit" value="Add New Task" />
          </form>
        </div>
      </div>
    );
  }
}
