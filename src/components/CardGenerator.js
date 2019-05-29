import React from 'react';
import AddImageButton from './AddImageButton';
import FillInItem from './FillInItem';
import RadioButtonsList from './RadioButtonsList';
import Collapsibles from './Collapsibles';
import logoAdalab from '../images/logo-adalab.png';
import logoTeam from '../images/octomeow.png';
import logoCard from '../images/tarjetas-molonas.svg';
import PreviewCard from './PreviewCard';
import defaultImage from './defaultImage';
import ButtonTwitter from './TwitterShareButton';
import { Link } from 'react-router-dom';
import '../scss/main.scss';

class CardGenerator extends React.Component {
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
        photo: defaultImage
      },
      isOpen: 1,
      isAvatarDefault: true,
      url: ''
    };

    this.fr = new FileReader();
    this.myFileField = React.createRef();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.openPanel = this.openPanel.bind(this);
    this.handleButtonReset = this.handleButtonReset.bind(this);
    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.getImage = this.getImage.bind(this);
    this.sendData = this.sendData.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
    this.callTwitter = this.callTwitter.bind(this);
  }

  updateAvatar(img) {
    this.setState(prevState => {
      const newProfile = { ...prevState.data, photo: img };
      return {
        data: newProfile,
        isAvatarDefault: false
      };
    });
  }

  handleInputChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    this.setState(prevState => {
      return {
        data: {
          ...prevState.data,
          [key]: value
        }
      };
    });
  }

  openPanel(e) {
    const target = parseInt(e.currentTarget.id);
    this.setState((prevState, props) => {
      let newOpen;
      prevState.isOpen === target ? (newOpen = 4) : (newOpen = target);
      return {
        isOpen: newOpen
      };
    });
  }

  handleButtonReset(e) {
    this.setState({
      data: {
        palette: 1,
        name: '',
        job: '',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
        photo: defaultImage
      }
    });
  }

  handleFilePicker() {
    this.myFileField.current.click();
  }

  uploadImage(e) {
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener('load', this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.updateAvatar(image);
  }

  getPreview(isDefault, image) {
    return !isDefault ? { backgroundImage: `url(${image})` } : {};
  }

  handleRadioClick(event) {
    const target = parseInt(event.currentTarget.value);
    this.setState(prevState => {
      return {
        ...prevState,
        data: {
          ...prevState.data,
          palette: target
        }
      };
    });
  }

  callTwitter(finalUrl){
    finalUrl = this.state.url;
    const twitterText = 'Esta es mi nueva tarjeta de contacto:';
    const linkTextTrans = encodeURIComponent(twitterText);
    const linkCardTransform = encodeURIComponent(finalUrl);
    const twitterLink ='https://twitter.com/intent/tweet?';
    const twitterFull = `${twitterLink}text=${linkTextTrans}&url=${linkCardTransform}`;
    return twitterFull;
  }

  sendData(event) {
    const cardObject = this.state.data;
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(cardObject),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(function(resp) {
        return resp.json();
      })
      .then(result => {
        this.setState({
          url: result.cardURL
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { isOpen, data, isAvatarDefault} = this.state;
    const { photo } = this.state.data;
    return (
      <div className='App'>
        <header className='header wrapper'>
          <section className='header--container main-container'>
            <Link to='/'>
              <img
                className='logo'
                src={logoCard}
                alt='logo awesome profile cards'
              />
            </Link>
          </section>
        </header>

        <main className='cards__container'>
          <form className='form' action='' method='POST'>
            <div className='wrapper'>
              <fieldset className='form__preview'>
                <PreviewCard
                  deleteData={this.handleButtonReset}
                  name={data.name ? data.name : 'Nombre completo'}
                  job={data.job ? data.job : 'Front-end'}
                  photo={photo}
                  hrefPhone={data.phone ? `tel:${data.phone}` : ''}
                  hrefEmail={data.email ? `mailto:${data.email}` : ''}
                  hrefLinkedin={
                    data.linkedin
                      ? `https://www.linkedin.com/in/${data.linkedin}`
                      : ''
                  }
                  hrefGitHub={
                    data.github ? `https://github.com/${data.github}` : ''
                  }
                  palette={this.state.data.palette}
                />
              </fieldset>
              <div className='form__content'>
                <fieldset className='form__design'>
                  <Collapsibles
                    title='Diseña'
                    icon='far fa-object-ungroup fa-lg legend__icon'
                    openPanel={this.openPanel}
                    id={1}
                    arrow={isOpen === 1 ? 'up' : 'down'}
                  />

                  <div
                    className={`option__distribution ${
                      isOpen === 1 ? '' : 'hidden'
                    } collapsibles`}
                    htmlFor='colors'
                  >
                    <label className='option__title legend__subtitle'>
                      Colores
                    </label>
                    <RadioButtonsList
                      handlerRadio={this.handleRadioClick}
                      selectedPalette={this.state.data.palette}
                    />
                  </div>
                </fieldset>
                <fieldset className='form__fill-in'>
                  <Collapsibles
                    title='Rellena'
                    icon='far fa-keyboard legend__icon'
                    openPanel={this.openPanel}
                    id={2}
                    arrow={isOpen === 2 ? 'up' : 'down'}
                  />

                  <div
                    className={`fill-in__items ${
                      isOpen === 2 ? '' : 'hidden'
                    } collapsibles`}
                  >
                    <FillInItem
                      forId='full_name'
                      labelName='Nombre completo'
                      type='text'
                      name='name'
                      place='Sally Jill'
                      value={this.state.data.name}
                      onChange={this.handleInputChange}
                    />

                    <FillInItem
                      forId='job'
                      labelName='Puesto'
                      type='text'
                      name='job'
                      place='Front-end'
                      value={this.state.data.job}
                      onChange={this.handleInputChange}
                    />

                    <div className='fill-in__item'>
                      <label className='fill-in__label' htmlFor='img-profile'>
                        Imagen de perfil
                      </label>
                      <div className='fill-in__buttonImg-wrapper'>
                        <AddImageButton
                          className='fill-in__button fill-in__buttonLabel js__profile-trigger'
                          value='Añadir imagen'
                          onClick={this.handleFilePicker}
                        />
                        <input
                          name='photo'
                          type='file'
                          id='img-selector'
                          className='action__hiddenField js__profile-upload-btn input-update'
                          ref={this.myFileField}
                          onChange={this.uploadImage}
                        />
                        <div
                          className='img-profile__preview js__profile-preview profile__preview'
                          style={this.getPreview(isAvatarDefault, photo)}
                        />
                      </div>
                    </div>
                    <FillInItem
                      forId='phone'
                      labelName='Teléfono'
                      type='tel'
                      name='phone'
                      place='612345698'
                      value={this.state.data.phone}
                      onChange={this.handleInputChange}
                    />

                    <FillInItem
                      forId='email'
                      labelName='Email'
                      type='email'
                      name='email'
                      place='sally-jill@gmail.com'
                      value={this.state.data.email}
                      onChange={this.handleInputChange}
                    />

                    <FillInItem
                      forId='linkedin'
                      labelName='Linkedin'
                      type='text'
                      name='linkedin'
                      place='sallyhill'
                      value={this.state.data.linkedin}
                      onChange={this.handleInputChange}
                    />

                    <FillInItem
                      forId='github'
                      labelName='Github'
                      type='text'
                      name='github'
                      place='sally-hill'
                      value={this.state.data.github}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </fieldset>
                <fieldset className='form__share'>
                  <Collapsibles
                    title='Comparte'
                    icon='fas fa-share-alt legend__icon legend__icon--share'
                    openPanel={this.openPanel}
                    id={3}
                    arrow={isOpen === 3 ? 'up' : 'down'}
                  />
                  <div
                    className={`share__container ${
                      isOpen === 3 ? '' : 'hidden'
                    } collapsibles`}
                  >
                    <button className='share-button' type='button' onClick={this.sendData}>
                      <i className='far fa-address-card' /> Crear tarjeta
                    </button>
                    <section
                      className={`section__twitter ${
                        this.state.url ? '' : 'collapsible__hidden'
                      }`}
                    >
                      <h3 className='title-twitter'>
                        La tarjeta ha sido creada:
                      </h3>
                      <a href={this.state.url} target='_blank' rel="noopener noreferrer">
                        {this.state.url}
                      </a>
                         <ButtonTwitter className='button-twitter'
                          url={this.callTwitter()} 
                        />
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

export default CardGenerator;
