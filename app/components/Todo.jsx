import React, {Component} from 'react';

class Todo extends Component {
    render() {
        let {id, text, completed} = this.props;
        return (
            <li onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={completed}/>
                {text}
            </li>
        )
    }
}

export default Todo;