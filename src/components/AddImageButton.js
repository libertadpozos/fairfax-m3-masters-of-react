import React from 'react';

class AddImageButton extends React.Component {
  render() {
    // primero, hago un destructurig de las props que llegan para no tener que poner todo el rato "this.props"
    const { className, value, onClick } = this.props;

    return (
      <input
        className={className}
        id='img-profile'
        type='button'
        onClick={onClick}
        value={value}
        name='img-profile'
      />
    );
  }
}

export default AddImageButton;
