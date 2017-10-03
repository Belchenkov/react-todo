import React from 'react';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button className="checkbox icon" onClick={this.props.onChange}>
                    <i className="material-icons">{this.props.checked ? 'check_box' : 'check_box_outline_blank'}</i>
                </button>
            </div>
        )
    }
}

Checkbox.propTypes = {
    checked: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired
};

export default Checkbox;