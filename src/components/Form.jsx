import React from 'react';
import Button from "./Button";

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};


        this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		let title = this.refs.title.value;

		if (title) {
			this.props.onAdd(title);
			this.refs.title.value = '';
		}
	}

	render() {
		return (
			<div>
				<form className="todo-form" onSubmit={this.handleSubmit}>
					<input type="text" ref="title" placeholder="Что нужно сделать?" />
					<Button type="submit">Добавить</Button>
				</form>
			</div>
		);
	}
}

Form.propsTypes = {
	onAdd: React.PropTypes.func.isRequired
};

export default Form;