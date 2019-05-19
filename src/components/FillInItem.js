import React from 'react';

class FillInItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        palette: 1,
        name: '',
        job: '',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
        photo: '',
      },
      collapsible: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
   // console.log(this.state.data.name);
  }
  handleInputChange(event) {
    const key = event.target.name;
    this.setState({
      [key]: event.target.value
    });
    console.log(key)
    console.log(event.target.value)
  }

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
          value={this.state.key}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
export default FillInItem;
