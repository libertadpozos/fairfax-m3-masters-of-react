import React from 'react';
import FillInItem from '../components/FillInItem';

class Object extends React.Component {
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
      value: '',
      collapsible: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    console.log(this.state.data.name);
  }

  handleInputChange(event) {
    const key = event.target.name;
    this.setState({
      [key]: event.target.value
    });
    
  }

  render() {
    const { name } = this.state.data;
    
    return <FillInItem 
      name = {this.props.name}
        value = {name}
        onChange={this.handleInputChange}
     />;
  }
}

export default Object;
