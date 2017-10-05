import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button className={this.props.className} {...this.props}  onClick={this.props.onClick}>
                    {this.props.icon ?
                        <i className="material-icons">{this.props.icon}</i>
                        :
                        this.props.children
                    }
                </button>
            </div>
        )
    }
}

Button.propTypes = {
     className: React.PropTypes.string,
     icon: React.PropTypes.string,
     onClick: React.PropTypes.func,
     children: React.PropTypes.node
};

export default Button;