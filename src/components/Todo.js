import React from 'react';

import Checkbox from './Checkbox';
import Button from './Button';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={
                `todo${this.props.completed ? ' completed' : ''}`
            }>

                <Checkbox checked={this.props.completed} onChange={() => this.props.onStatusChange(this.props.id) } />

                <span className="todo-title">{this.props.title}</span>

                <Button className="delete icon" icon="delete" />

            </div>
        )
    }
}

Todo.propsTypes = {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
};

export default Todo;