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

                <Checkbox initiallyChecked={this.props.completed} />

                <span className="todo-title">{this.props.title}</span>

                <Button className="delete icon" icon="delete" />

            </div>
        )
    }
}

Todo.propsTypes = {
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
};

export default Todo;