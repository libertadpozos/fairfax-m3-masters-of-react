import React from React;

class Collapsibles extends React.Component { 
    render(){
        return(
    <legend className="legend closed"> <i className="far fa-object-ungroup fa-lg legend__icon"></i>
  
        <h2 className="legend__title">Diseña</h2>
        <i className="fas fa-chevron-up legend__arrow"></i>
    </legend>
        );
    }
}

export default Collapsibles;


// PLAN ****
 {/* cambiar class del primer icono  */} 
        
    {/* cambiar inner de h2 */}
    // El contenido será un prop