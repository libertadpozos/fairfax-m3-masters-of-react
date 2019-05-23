import React from 'react';
import CardHeader from './CardHeader';
import SocialMediaList from './SocialMediaList';
import ButtonReset from './ButtonReset';

class PreviewCard extends React.Component {
  getTheme() {
    const { palette } = this.props;
    if (palette === 2) {
      return 'palette--2';
    } else if (palette === 3) {
      return 'palette--3';
    } else {
      return '';
    }
  }

  render() {
    const { photo } = this.props;
    return (
      <section className='preview-container'>
        <div className='button-container'>
          <ButtonReset
            accessibilityText='Botón de borrar'
            icon='far fa-trash-alt'
          >
            Reset
          </ButtonReset>

          <div className={`card-preview palette--1 ${this.getTheme()}`}>
            <CardHeader
              defaultName={this.props.name}
              defaultJob={this.props.job}
            />
            <div
              className='user--profile__pic js__profile-image profile__image'
              style={{ backgroundImage: `url(${photo})` }}
            />
            <div className='contact__link'>
              <SocialMediaList
                hrefPhone={this.props.hrefPhone}
                hrefEmail={this.props.hrefEmail}
                hrefLinkedin={this.props.hrefLinkedin}
                hrefGitHub={this.props.hrefGitHub}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PreviewCard;
