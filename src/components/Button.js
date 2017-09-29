import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button className={this.props.className}>
                    <i className="material-icons">{this.props.icon}</i>
                </button>
            </div>
        )
    }
}

Button.propTypes = {
     className: React.PropTypes.string,
     icon: React.PropTypes.string
};

export default Button;