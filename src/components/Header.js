import React from 'react';
import Status from "./Status";
import Stopwatch from "./Stopwatch";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <Status todos={this.props.todos} />
                <h1>{this.props.title}</h1>
                <Stopwatch />
            </header>
        )
    }
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired,
    todos: React.PropTypes.array.isRequired,
};


export default Header;