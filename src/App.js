import React from 'react';
import RadioButtonsList from './components/RadioButtonsList';
import Collapsibles from './components/Collapsibles';
import logo from './logo.svg';
import './scss/main.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="header wrapper">
          <section className="header--container main-container">
            <a href="index.html">
              <img
                className="logo"
                src="assets/images/tarjetas-molonas.svg"
                alt="logo awesome profile cards"
              />
            </a>
          </section>
        </header>

        <main className="cards__container">
          <form className="form" action="" method="POST">
            <div className="wrapper">
              <fieldset className="form__preview">
                <section className="preview-container">
                  <div className="button-container">
                    <div className="reset-button">
                      <label for="reset" className="visually-hidden">
                        Botón de borrar
                      </label>
                      <button
                        className="reset--button"
                        type="button"
                        id="reset"
                      >
                        <i className="far fa-trash-alt" />
                        Reset
                      </button>
                    </div>

                    <div className="card-preview palette--1">
                      <div className="card--header">
                        <div className="sidebar bg__light" />
                        <div className="main--data">
                          <p className="full-name txt__dark">
                            Nombre de prueba
                          </p>
                          <p className="occupation txt__medium" />
                        </div>
                      </div>
                      <div
                        className="user--profile__pic js__profile-image profile__image"
                        //  style='backgroundImage:url(assets/images/default-profile-pic.png)'
                      />

                      <div className="contact__link">
                        <ul className="contact__list">
                          <li className="contact__list--rrss pad--mobile border__medium">
                            <a
                              href="/"
                              className="icon__link--mobile txt__dark"
                              title=""
                              id="linkMobile"
                            >
                              <i className="contact__list--icon fas fa-mobile-alt" />
                            </a>
                          </li>
                          <li className="contact__list--rrss border__medium">
                            <a className="email txt__dark" href="/">
                              <i className="contact__list--icon far fa-envelope" />
                            </a>
                          </li>
                          <li className="contact__list--rrss border__medium">
                            <a
                              href="/"
                              id="linkEdin"
                              className="link__linkedin txt__dark"
                            >
                              <i className="contact__list--icon fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li className="contact__list--rrss border__medium">
                            <a href="/" id="linkGithub" className="txt__dark">
                              <i className="contact__list--icon fab fa-github-alt" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </fieldset>
              <div className="form__content">
                <fieldset className="form__design">
                  {/* <legend className='legend closed'>
                    <i className='far fa-object-ungroup fa-lg legend__icon' />

                 <h2 className='legend__title'>Diseña</h2>
                 <i className='fas fa-chevron-up legend__arrow' />
               </legend> */}
                  <Collapsibles 
                  title="Diseña" 
                  icon = "far fa-object-ungroup fa-lg legend__icon"
                  
                  />

                  {/* <label className="option__distribution hidden collapsibles" for="colors"> */}
                  <label className="option__distribution collapsibles" for="colors">
                    <p className="option__title legend__subtitle">Colores</p>
                    <RadioButtonsList />  
                  </label>
                </fieldset>
                <fieldset className="form__fill-in">
                  {/* <legend className="legend closed">
                    <i className="far fa-keyboard legend__icon" />

                    <h2 className="legend__title">Rellena</h2>
                    <i className="fas fas fa-chevron-up legend__arrow" />
                  </legend> */}
                  <Collapsibles 
                  title="Rellena"
                  icon= "far fa-keyboard legend__icon" />

                  <div className="fill-in__items hidden collapsibles">
                    <div className="fill-in__item">
                      <label className="fill-in__label" for="full_name">
                        Nombre completo
                      </label>
                      <input
                        className="fill-in__input input-update"
                        id="full_name"
                        type="text"
                        name="name"
                        placeholder="Sally Jill"
                        required
                      />
                    </div>
                    <div className="fill-in__item">
                      <label className="fill-in__label" for="job">
                        Puesto
                      </label>
                      <input
                        className="fill-in__input input-update"
                        id="job"
                        type="text"
                        name="job"
                        placeholder="Front-end"
                      />
                    </div>
                    <div className="fill-in__item">
                      <label className="fill-in__label" for="img-profile">
                        Imagen de perfil
                      </label>
                      <div className="fill-in__buttonImg-wrapper">
                        <input
                          className="fill-in__button fill-in__buttonLabel js__profile-trigger"
                          id="img-profile"
                          type="button"
                          value="Añadir imagen"
                          name="img-profile"
                        />
                        <input
                          name="photo"
                          type="file"
                          id="img-selector"
                          className="action__hiddenField js__profile-upload-btn input-update"
                        />
                        <div className="img-profile__preview js__profile-preview profile__preview" />
                      </div>
                    </div>
                    <div className="fill-in__item">
                      <label className="fill-in__label" for="phone">
                        Teléfono
                      </label>
                      <input
                        className="fill-in__input input__tel input-update"
                        id="phone"
                        type="tel"
                        minlength="9"
                        name="phone"
                        placeholder="612345698"
                      />
                    </div>
                    <div className="fill-in__item">
                      <label className="fill-in__label" for="email">
                        Email
                      </label>
                      <input
                        className="fill-in__input input-update"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="sally-jill@gmail.com"
                      />
                    </div>
                    <div className="fill-in__item">
                      <label className="fill-in__label" for="linkedin">
                        Linkedin
                      </label>
                      <input
                        className="fill-in__input input-update"
                        id="linkedin"
                        type="text"
                        name="linkedin"
                        placeholder="sallyhill"
                      />
                    </div>
                    <div className="fill-in__item">
                      <label className="fill-in__label" for="github">
                        Github
                      </label>
                      <input
                        className="fill-in__input input-update"
                        id="github"
                        type="text"
                        name="github"
                        placeholder="sally-hill"
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset className="form__share">
                  {/* <legend className="legend closed">
                    <i className="fas fa-share-alt legend__icon legend__icon--share" />

                    <h2 className="legend__title">Comparte</h2>
                    <i className="fas fa-chevron-up legend__arrow" />
                  </legend> */}
                  <Collapsibles 
                  title="Comparte"
                  icon="fas fa-share-alt legend__icon legend__icon--share"
                  />

                  <div className="share__container hidden collapsibles">
                    <button className="share-button" type="button">
                      <i className="far fa-address-card" /> Crear tarjeta
                    </button>
                    <section className="section__twitter collapsible__hidden">
                      <h3 className="title-twitter">
                        La tarjeta ha sido creada:
                      </h3>
                      <a className="title-twitter-content" href="/" />

                      <button className="button-twitter">
                        <a className="twitter-link" href="/" target="_top">
                          <i className="fab fa-twitter twitter-icon" />
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
        <footer className="main-footer">
          <div className="main-container">
            <ul className="main-footer__list align-text">
              <li className="main-footer__list-text">
                Awesome profile-cards © 2019
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
      </div>
    );
  }
}

export default App;
