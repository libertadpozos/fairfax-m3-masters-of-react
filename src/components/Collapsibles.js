import React from 'react';

class Collapsibles extends React.Component {
  render() {
    return (
      <legend className="legend closed">
        <i className={this.props.icon} />
        <h2 className="legend__title">{this.props.title}</h2>
        <i className="fas fas fa-chevron-up legend__arrow" />
      </legend>
    );
  }
}

export default Collapsibles;

// PLAN ****
{
  /* cambiar class del primer icono  */
}

{
  /* cambiar inner de h2 */
}
// El contenido será un prop
