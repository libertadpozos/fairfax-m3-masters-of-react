import React from 'react';
import RadioButton from './RadioButton';

class RadioButtonsList extends React.Component {
    render() {
        return (
            <div className='option__container'>
                <RadioButton handlerRadio={this.props.handlerRadio} numberPallete={1} checked={this.props.selectedPalette === 1 ? true : false} />
                <RadioButton handlerRadio={this.props.handlerRadio} numberPallete={2} checked={this.props.selectedPalette === 2 ? true : false} />
                <RadioButton handlerRadio={this.props.handlerRadio} numberPallete={3} checked={this.props.selectedPalette === 3 ? true : false} />
            </div>
        );
    }
}

export default RadioButtonsList;