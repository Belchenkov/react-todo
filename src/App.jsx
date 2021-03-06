import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactCSSTransitionsGroup from 'react-addons-transition-group';

import Header from './components/Header';
import Todo from './components/Todo';
import Form from "./components/Form";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: []
		};

		this.handleStatusChange = this.handleStatusChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleError = this.handleError.bind(this);
	}

	componentDidMount() {
	  axios.get('/api/todos')
        .then(response => response.data)
        .then(todos => this.setState({ todos }))
        .catch(this.handleError);
  }

    handleStatusChange(id) {
	    axios.patch(`/api/todos/${id}`)
          .then(response => {
            let todos = this.state.todos.map(todo => {
              if (todo.id === id) {
                todo = response.data;
              }
              return todo;
            });

            this.setState({
              todos
            });
          })
          .catch(this.handleError);
	}
    handleAdd(title) {
	    axios.post('/api/todos', { title })
        .then(response => response.data)
        .then(todo => {
          let todos = [...this.state.todos, todo];
          this.setState({ todos });
        })
        .catch(this.handleError);
    }

    handleDelete(id) {
	    axios.delete(`/api/todos/${id}`)
        .then(() => {
          let todos = this.state.todos.filter(todo => todo.id !== id);

          this.setState({ todos });
        })

	}

  handleEdit(id, title) {
	  axios.put(`/api/todos/${id}`, { title })
        .then(response => {
        let todos = this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.title = title;
          }

          return todo;
        });

        this.setState({ todos });
      })
      .catch(this.handleError);

	}

  handleError(error) {
	  console.log(error);
  }

	render() {
		return (
			<main>
				<Header title={this.props.title} todos={this.state.todos} />

        <ReactCSSTransitionsGroup 
          className="todo-list"
          component="section"
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}
          transitionAppearTimeout={500}
        >
					{this.state.todos.map(todo =>
						<Todo
							key={todo.id}
							id={todo.id}
							title={todo.title}
							completed={todo.completed}
							onDelete={this.handleDelete}
							onStatusChange={this.handleStatusChange}
							onEdit={this.handleEdit}
						/>
					)}
				</ReactCSSTransitionsGroup>
                <Form onAdd={this.handleAdd} />
			</main>
		);
	}
}


App.defaultProps = {
	title: 'React Todo'
};

ReactDOM.render(<App />, document.getElementById('root'));
