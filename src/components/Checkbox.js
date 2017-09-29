import React from 'react';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button className="checkbox icon">
                    <i className="material-icons">check_box_outline_blank</i>
                </button>
            </div>
        )
    }
}

Checkbox.propTypes = {
    checked: React.PropTypes.bool.isRequired
};


export default Checkbox;