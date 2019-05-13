import React from 'react';

class Footer extends React.Component{
render(){
    return(
       
        <footer className="main-footer">
        <div className="main-container">
          <ul className="main-footer__list align-text">
            <li className="main-footer__list-text">
              {this.props.footerText} 
            </li>
            <li className="main-footer__list-adalab">
            
              <img src="assets/images/logo-adalab.png" alt="Imagen Adalab" />
            </li>
            <li className="main-footer__list-logo">
              <a href="." title="Link to Home">
                <img
                  className="main-footer__list-img"
                  src="assets/images/octomeow.png"
                  alt="Imagen Octomeow"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      
    );
}

}

export default Footer;
