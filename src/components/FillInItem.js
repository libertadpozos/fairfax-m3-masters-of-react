import React from 'react';

class FillInItem extends React.Component {
  render() {
    return (
      <div className='fill-in__item'>
        <label className='fill-in__label' htmlFor={this.props.forId}>
          {this.props.labelName}
        </label>
        <input
          className='fill-in__input input-update'
          id={this.props.forId}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.place}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
export default FillInItem;
