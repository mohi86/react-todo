import React, {Component} from 'react';
import moment from "moment";

class Todo extends Component {
    render() {
        const {id, text, completed, createdAt, completedAt} = this.props;
        let todoClassName = completed ? 'todo todo-completed' : 'todo';

        const renderDate = () => {
          let message = 'Created ';
          let timestamp = createdAt;

          if (completed) {
              message = 'Completed ';
              timestamp = completedAt;
          }

          return message + moment.unix(timestamp).format('MMM Do YY @ h:mm a');
        };
        return (
            <li onClick={() => {
                this.props.onToggle(id);
            }}
            className={todoClassName}
            >
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </li>
        )
    }
}

export default Todo;