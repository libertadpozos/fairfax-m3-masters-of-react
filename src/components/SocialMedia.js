import React from 'react';

class SocialMedia extends React.Component {
    render() {
        return (
            <li className={`contact__list--rrss ${this.props.aditionalClass} border__medium`}>
                <a
                    href='/'
                    className={`${this.props.classLink} txt__dark`}
                    title=''
                    id='linkMobile'
                >
                    <i className={`contact__list--icon ${this.props.iconSocialMedia}`} />
                </a>
            </li>
        );
    }
}

export default SocialMedia;