import './Navbar.scss';

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">ToDoList</Link></li>
                    <li><Link to="/create">Add Task</Link></li>
                </ul>
            </nav>
        )
    }
}
