import React from 'react';

class Collapsibles extends React.Component {
  render() {
    return (
      <legend onClick={this.props.openPanel} className="legend closed" id={this.props.id}>
        <i className={this.props.icon} />
        <h2 className="legend__title">{this.props.title}</h2>
        <i className={`fas fa-chevron-${this.props.arrow} legend__arrow`} />
      </legend>
    );
  }
}

export default Collapsibles;