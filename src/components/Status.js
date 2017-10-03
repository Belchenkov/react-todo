import React from 'react';

class Status extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let total = this.props.todos.length;
        let completed = this.props.todos.filter(todo => todo.completed).length;
        let notCompleted = total - completed;

        return (
            <div>
                <table className="stats">
                    <tbody>
                        <tr>
                            <th>Всего задач:</th>
                            <td>{total}</td>
                        </tr>
                        <tr>
                            <th>Выполнено:</th>
                            <td>{completed}</td>
                        </tr>
                        <tr>
                            <th>Осталось:</th>
                            <td>{notCompleted}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

Status.propTypes = {
    todos: React.PropTypes.array.isRequired
};

export default Status;