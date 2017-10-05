import React from 'react';
import Button from "./Button";

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	render() {
		return (
			<div>
				<form className="todo-form">
					<input type="text" placeholder="Что нужно сделать?" />
					<Button type="submit">Добавить</Button>
				</form>
			</div>
		);
	}
}

Form.propsTypes = {

};

export default Form;