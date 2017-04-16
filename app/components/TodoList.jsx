import React, {Component} from 'react';
import Todo from "./Todo";

class TodoList extends Component {
    render() {
        let {todos} = this.props;
        const renderTodos = () => {
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