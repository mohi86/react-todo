import React, {Component} from 'react';
import TodoList from "TodoList";
import AddTodo from "./AddTodo";

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Learn Rect'
                }
            ]
        }
    }

    handleAddTodo(text) {
        console.log(text);
    }

    render() {
        let {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
}

export default TodoApp;