import React from 'react';

class CardHeader extends React.Component {
    render() {
        return (
            <div className='card--header'>
                <div className='sidebar bg__light' />
                <div className='main--data'>
                    <p className='full-name txt__dark'>{this.props.defaultName}</p>
                    <p className='occupation txt__medium'>{this.props.defaultJob}</p>
                </div>
            </div>
        );
    }
}

export default CardHeader;