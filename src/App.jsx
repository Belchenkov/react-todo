import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Todo from './components/Todo';

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
					<Todo title={"Изучить EcmaScript 2015"} completed={true} />
					<Todo title={"Изучить React.js"} completed={false} />
				</section>
			</main>
		);
	}
}

App.defaultProps = {
	title: 'React Todo'
};

ReactDOM.render(<App />, document.getElementById('root'));
