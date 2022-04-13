import React, { Component } from "react";
import "./createTodo.scss";
import { useParams } from "react-router-dom";

// This class is used to Edit the todo app

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class editTodo extends Component {

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

    // Loading the component To be Edited
    componentDidMount() {
        // let self = this;
        // console.log(this.props.match.params.id);

        let { id } = this.props.params;
        console.log(id);

        fetch('http://localhost:5001/todos/' + id)
            .then(r => r.json())
            .then(response => {
                this.setState({
                    title: response.title,
                    description: response.description,
                })
            }).catch(function (error) {
                console.log(error);
            })

        // axios.get('http://localhost:5001/todos/' + id)
        //     .then(response => {
        //         this.setState({
        //             title: response.data.title,
        //             description: response.data.description,
        //         })
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })


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

        let { id } = this.props.params;

        // Using Fetch Put to update
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo)
        };

        fetch("http://localhost:5001/todos/" + id, requestOptions)
            .then(response => response.json())
            .then(res => console.log(res))

        // axios
        // .put("http://localhost:5001/todos/" + id, todo)
        // .then((res) => console.log(res.data));

        window.location = "/";
    }

    render() {
        return (
            <div className="center">
                <h1>Edit Task</h1>
                <div className="formContainer">
                    <form onSubmit={this.onSubmit}>
                        <label for="title">Title</label>
                        <input

                            value={this.state.title}
                            onChange={this.onChangeTitle}
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter Task Title..."
                        />

                        <label for="desc">Description</label>
                        <textarea

                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            id="desc"
                            name="desc"
                            placeholder="Enter Task Description..."
                        ></textarea>

                        <input type="submit" value="Edit Task" />
                    </form>
                </div>
            </div>
        );
    }
}

export default withParams(editTodo);