import React from 'react';

class ButtonReset extends React.Component {
    render() {
        return(
            <div className="reset-button">
                <label for="reset" className="visually-hidden">Botón de borrar</label>
                <button className="reset--button" type="button" id="reset">
                    <i className={this.props.icon} />
                    {this.props.children}
                </button>
            </div>
        );
    }
}

export default ButtonReset;