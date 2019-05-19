import React from 'react';

class FillInItem extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // data: { **NOTA, SI COMENTO "data" si que puedo guardar en el objeto el cambio de estado del valor "name", que pasa de vacío a lleno con lo escrito en el input
  //       palette: 1,
  //       name: '',
  //       job: '',
  //       phone: '',
  //       email: '',
  //       linkedin: '',
  //       github: '',
  //       photo: '',
  //     // },
  //     collapsible: false
  //   };
  //   this.handleInputChange = this.handleInputChange.bind(this);
  //  // console.log(this.state.data.name);
  // }
  // handleInputChange(event) {
  //   const key = event.target.name;
  //   this.setState({
  //     [key]: event.target.value
  //   });
  //   console.log(key)
  //   console.log(event.target.value)
  // }

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
