import React from 'react';

import Checkbox from './Checkbox';
import Button from './Button';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          editing: false
        };

      this.renderForm = this.renderForm.bind(this);
      this.renderDisplay = this.renderDisplay.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  renderDisplay() {
    return (
        <div className={
          `todo${this.props.completed ? ' completed' : ''}`
        }>
          <Checkbox checked={this.props.completed} onChange={() => this.props.onStatusChange(this.props.id)}/>
          <span className="todo-title">{this.props.title}</span>
          <Button
              onClick={() => this.setState({editing: true})}
              className="edit icon"
              icon="edit"
          />
          <Button
              className="delete icon"
              icon="delete"
              onClick={() => this.props.onDelete(this.props.id)}
          />
        </div>
    );
  }

  renderForm() {
    return (
        <form className="todo-edit-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="title" defaultValue={this.props.title}/>
          <Button className="save icon" icon="save" type="submit" />
        </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    let title = this.refs.title.value;

    this.props.onEdit(this.props.id, title);
    this.setState({ editing: false });

  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}

Todo.propsTypes = {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onStatusChange: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    onEdit: React.PropTypes.func.isRequired
};

export default Todo;