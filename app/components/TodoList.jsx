import React, {Component} from 'react';
import Todo from "./Todo";

class TodoList extends Component {
    render() {
        let {todos} = this.props;
        const renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing Todo</p>
                )
            }
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
                )
            })
        };
        return (
            <ul>
                {renderTodos()}
            </ul>
        )
    }
}

export default TodoList;