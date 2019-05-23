import React from 'react';
import '../scss/main.scss';
import logoAwesome from '../images/logo-awesome-cards.svg';
import logoAdalab from '../images/logo-adalab.png';
import logoTeam from '../images/octomeow.png';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='central gradient-landing'>
          <header className='header-landing'>
            <div className='main-container flex-center'>
              <img
                className='header-landing__img'
                src={logoAwesome}
                alt='Awesome Profile-cards'
              />
            </div>
          </header>
          <main className='main-landing'>
            <section className='section-landing'>
              <div className='main-container flex-center align-text flex-direction'>
                <h1 className='section-landing__title title--bold__orange'>
                  Crea tu tarjeta de visita
                </h1>
                <p className='section-landing__text title--legend__blue'>
                  Crea mejores contactos profesionales de forma fácil y cómoda
                </p>
                <ul className='section-landing__list'>
                  <li className='section-landing__list-item flex-direction align-text'>
                    <i className='far fa-object-ungroup section-landing__list-icon' />
                    <span className='section-landing__list-text'>Diseña</span>
                  </li>
                  <li className='section-landing__list-item flex-direction align-text'>
                    <i className='far fa-keyboard section-landing__list-icon' />
                    <span className='section-landing__list-text'>Rellena</span>
                  </li>
                  <li className='section-landing__list-item flex-direction align-text'>
                    <i className='fas fa-share-alt section-landing__list-icon' />
                    <span className='section-landing__list-text'>Comparte</span>
                  </li>
                </ul>
                <Link to='/card-generator' className='section-landing__link'>
                  Comenzar
                </Link>
              </div>
            </section>
          </main>
          <footer className='main-footer'>
            <div className='main-container'>
              <ul className='main-footer__list align-text'>
                <li className='main-footer__list-text'>
                  Awesome profile-cards © 2019
                </li>
                <li className='main-footer__list-adalab'>
                  <img src={logoAdalab} alt='Imagen Adalab' />
                </li>
                <li className='main-footer__list-logo'>
                  <Link to='/' title='Link to Home'>
                    <img
                      className='main-footer__list-img'
                      src={logoTeam}
                      alt='Imagen Octomeow'
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default Landing;
