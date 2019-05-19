import React from 'react';
import AddImageButton from './components/AddImageButton';
import CardHeader from './components/CardHeader';
import Collapsibles from './components/Collapsibles';
import FillInItem from './components/FillInItem';
import RadioButtonsList from './components/RadioButtonsList';
import SocialMediaList from './components/SocialMediaList';
import logoAdalab from './images/logo-adalab.png';
import logoTeam from './images/octomeow.png';
import logoCard from './images/tarjetas-molonas.svg';
import './scss/main.scss';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='header wrapper'>
          <section className='header--container main-container'>
            <a href='index.html'>
              <img
                className='logo'
                src={logoCard}
                alt='logo awesome profile cards'
              />
            </a>
          </section>
        </header>

        <main className='cards__container'>
          <form className='form' action='' method='POST'>
            <div className='wrapper'>
              <fieldset className='form__preview'>
                <section className='preview-container'>
                  <div className='button-container'>
                    <div className='reset-button'>
                      <label htmlFor='reset' className='visually-hidden'>
                        Botón de borrar
                      </label>
                      <button
                        className='reset--button'
                        type='button'
                        id='reset'
                      >
                        <i className='far fa-trash-alt' />
                        Reset
                      </button>
                    </div>

                    <div className='card-preview palette--1'>
                      <CardHeader
                        defaultName='Nombre de prueba'
                        defaultJob='Front-end developer'
                      />
                      {/* <div
                     className='user--profile__pic js__profile-image profile__image' style='background-image:url(assets/images/default-profile-pic.png)'></div> */}
                      <div className='user--profile__pic js__profile-image profile__image' />
                      <div className='contact__link'>
                        <SocialMediaList />
                      </div>
                    </div>
                  </div>
                </section>
              </fieldset>
              <div className='form__content'>
                <fieldset className='form__design'>
                  <Collapsibles
                    title='Diseña'
                    icon='far fa-object-ungroup fa-lg legend__icon'
                  />

                  {/* <label className="option__distribution hidden collapsibles" for="colors"> */}
                  <label
                    className='option__distribution collapsibles'
                    htmlFor='colors'
                  >
                    <p className='option__title legend__subtitle'>Colores</p>
                    <RadioButtonsList />
                  </label>
                </fieldset>
                <fieldset className='form__fill-in'>
                  <Collapsibles
                    title='Rellena'
                    icon='far fa-keyboard legend__icon'
                  />

                  {/* <div className="fill-in__items hidden collapsibles"> */}
                  <div className='fill-in__items collapsibles'>
                    <FillInItem
                      forId='full_name'
                      labelName='Nombre completo'
                      type='text'
                      name='name'
                      place='Sally Jill'
                    />

                    <FillInItem
                      forId='job'
                      labelName='Puesto'
                      type='text'
                      name='job'
                      place='Front-end'
                    />

                    <div className='fill-in__item'>
                      <label className='fill-in__label' htmlFor='img-profile'>
                        Imagen de perfil
                      </label>
                      <div className='fill-in__buttonImg-wrapper'>
                        <AddImageButton
                          className='fill-in__button fill-in__buttonLabel js__profile-trigger'
                          value='Añadir imagen'
                        />
                        <input
                          name='photo'
                          type='file'
                          id='img-selector'
                          className='action__hiddenField js__profile-upload-btn input-update'
                        />
                        <div className='img-profile__preview js__profile-preview profile__preview' />
                      </div>
                    </div>
                    <FillInItem
                      forId='phone'
                      labelName='Teléfono'
                      type='tel'
                      name='phone'
                      place='612345698'
                    />

                    <FillInItem
                      forId='email'
                      labelName='Email'
                      type='email'
                      name='email'
                      place='sally-jill@gmail.com'
                    />

                    <FillInItem
                      forId='linkedin'
                      labelName='Linkedin'
                      type='text'
                      name='linkedin'
                      place='sallyhill'
                    />

                    <FillInItem
                      forId='github'
                      labelName='Github'
                      type='text'
                      name='github'
                      place='sally-hill'
                    />
                  </div>
                </fieldset>
                <fieldset className='form__share'>
                  <Collapsibles
                    title='Comparte'
                    icon='fas fa-share-alt legend__icon legend__icon--share'
                  />

                  <div className='share__container hidden collapsibles'>
                    <button className='share-button' type='button'>
                      <i className='far fa-address-card' /> Crear tarjeta
                    </button>
                    <section className='section__twitter collapsible__hidden'>
                      <h3 className='title-twitter'>
                        La tarjeta ha sido creada:
                      </h3>
                      <a className='title-twitter-content' href='/' />

                      <button className='button-twitter'>
                        <a className='twitter-link' href='/' target='_top'>
                          <i className='fab fa-twitter twitter-icon' />
                          Compartir en Twitter
                        </a>
                      </button>
                    </section>
                  </div>
                </fieldset>
              </div>
            </div>
          </form>
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
                <a href='.' title='Link to Home'>
                  <img
                    className='main-footer__list-img'
                    src={logoTeam}
                    alt='Imagen Octomeow'
                  />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
