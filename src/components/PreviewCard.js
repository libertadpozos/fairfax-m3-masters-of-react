import React from 'react';
import CardHeader from './CardHeader';
import SocialMediaList from './SocialMediaList';

class PreviewCard extends React.Component {
    render() {
        return (
            <section className="preview-container">
                  <div className="button-container">
                    <div className="reset-button">
                      <label for="reset" className="visually-hidden">
                        {this.props.textAccesibility}
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
        );
    }
}

export default PreviewCard;