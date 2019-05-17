import React from 'react';

class RadioButton extends React.Component {
    render() {
        return (
            <label className='color__container'>
                <div className='color-item radio__container'>
                    <input
                        className='radio input-update'
                        type='radio'
                        id='colors'
                        name='palette'
                        value={this.props.numberPallete}
                        checked={this.props.checked}
                        onClick={this.props.handlerRadio}
                    />
                    <span className='checkmark' id='p1' />
                </div>
                <div className={`palette--${this.props.numberPallete}`}>
                    <div className='color-item bg__dark' />
                    <div className='color-item bg__medium' />
                    <div className='color-item bg__light' />
                </div>
            </label>
        );
    }
}

export default RadioButton;