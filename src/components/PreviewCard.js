import React from 'react';
import CardHeader from './CardHeader';
import SocialMediaList from './SocialMediaList';
import ButtonReset from './ButtonReset';

class PreviewCard extends React.Component {
    render() {
        return (
            <section className="preview-container">
                <div className="button-container">
                    <ButtonReset
                        accessibilityText="Botón de borrar"
                        icon="far fa-trash-alt"
                    >
                        Reset
                    </ButtonReset>

                    <div className="card-preview palette--1">
                        <CardHeader
                            defaultName={this.props.name}
                            defaultJob={this.props.job}
                        />
                        <div className="user--profile__pic js__profile-image profile__image" />
                        <div className="contact__link">
                            <SocialMediaList 
                                hrefEmail={this.props.hrefEmail}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PreviewCard;
