import React from 'react';

class AddImageButton extends React.Component {
  render() {
// primero, hago un destructurig de las props que llegan para no tener que poner todo el rato "this.props"
    const {
        className,
        value,
    } = this.props;

    return (
        <input
        className = {className}
        id="img-profile"
        type="button"
        value={value}
        name="img-profile"
      />
    );
  }
}

export default AddImageButton;
