import React from 'react';
import PropTypes from 'prop-types';

class ButtonReset extends React.Component {
    render() {
        return(
            <div className="reset-button">
                <label htmlFor="reset" className="visually-hidden">{this.props.accessibilityText}</label>
                <button 
                    className="reset--button" 
                    type="button" 
                    id="reset"
                    onClick={this.props.deleteData}
                >
                    <i className={this.props.icon} />
                    {this.props.children}
                </button>
            </div>
        );
    }
}

ButtonReset.propTypes = {
    accessibilityText: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default ButtonReset;