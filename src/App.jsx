import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Todo from './components/Todo';
import todos from "./todos";

class App extends React.Component {
	constructor(props) {
		super(props);
        console.log(props);
    }

	render() {
		return (
			<main>
				<Header title={this.props.title}/>

				<section className="todo-list">
					{this.props.todos.map(
						todo => <Todo key={todo.id} title={todo.title} completed={todo.completed} />
					)}
				</section>
			</main>
		);
	}
}

App.propsTypes = {
	title: React.PropTypes.string,
	todos: React.PropTypes.arrayOf(React.PropTypes.shape({
		id: React.PropTypes.number.isRequired,
		title: React.PropTypes.string.isRequired,
		completed: React.PropTypes.bool.isRequired
	})).isRequired
};

App.defaultProps = {
	title: 'React Todo'
};

ReactDOM.render(<App todos={todos} />, document.getElementById('root'));
