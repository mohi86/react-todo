import React, {Component} from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from "TodoList";
import AddTodo from "./AddTodo";
import TodoSearch from "./TodoSearch";
import TodoApi from './../api/TodoApi';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: TodoApi.getTodos()
        };
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    componentDidUpdate() {
        TodoApi.setTodos(this.state.todos);
    }

    handleToggle(id) {
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : null;
            }
            return todo;
        });

        this.setState({
            todos: updatedTodos
        })
    }

    handleAddTodo(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    text,
                    id: uuid(),
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: null
                }
            ]
        })
    }

    handleSearch(showCompleted, searchText) {
        this.setState({
            showCompleted,
            searchText: searchText.toLocaleLowerCase()
        });
    }

    render() {
        let {todos, showCompleted, searchText} = this.state;
        const filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);

        return (
            <div>
                <h1 className="page-title">App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                            <AddTodo onAddTodo={this.handleAddTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoApp;