import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.js";
import TodoList from "./components/TodoList/todoList.js";
import CreateTodo from "./components/TodoList/createTodo.js";
import EditTodo from "./components/TodoList/editTodo";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <br />
          <Routes>
            <Route exact path="/" element={<TodoList />} />
            <Route exact path="/create" element={<CreateTodo />} />
            <Route exact path="/edit/:id" element={<EditTodo />} />
          </Routes>
        </Router>
      </>
    );
  }
}
