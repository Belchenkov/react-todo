import React from 'react';
import Button from "./Button";

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: ''
		};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		let title = this.state.title;

		if (title) {
			this.props.onAdd(title);
			this.setState({
				title: ''
			});
		}
	}

    handleChange(e) {
		let title = e.target.value;

		this.setState({
			title
		});
	}

	render() {
		return (
			<div>
				<form className="todo-form" onSubmit={this.handleSubmit}>
					<input
						type="text"
						value={this.state.title}
						placeholder="Что нужно сделать?"
						onChange={this.handleChange}
					/>
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