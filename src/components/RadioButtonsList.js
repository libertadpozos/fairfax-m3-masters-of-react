import React from 'react';
import RadioButton from './RadioButton';

class RadioButtonsList extends React.Component {
    render() {
        return (
            <div className='option__container'>
                <RadioButton numberPallete={1} checked={true}/>
                <RadioButton numberPallete={2} />
                <RadioButton numberPallete={3} />
            </div>
        );
    }
}

export default RadioButtonsList;