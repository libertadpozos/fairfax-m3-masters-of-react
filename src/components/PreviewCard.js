import React from 'react';
import CardHeader from './CardHeader';
import SocialMediaList from './SocialMediaList';
import ButtonReset from './ButtonReset';

class PreviewCard extends React.Component {
    getTheme(){
        const { palette } = this.props ;
        if (palette === 2){
            return 'palette--2';
        } else if (palette === 3) {
            return 'palette--3';
        }else {
            return '';
        }
    }

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

                    <div className={`card-preview palette--1 ${this.getTheme()} `}>
                        <CardHeader
                            defaultName="Nombre de prueba"
                            defaultJob="Front-end developer"
                        />
                        <div className="user--profile__pic js__profile-image profile__image" />
                        <div className="contact__link">
                            <SocialMediaList />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PreviewCard;
