import React from 'react';

class SocialMedia extends React.Component {
    render() {
        return (
            <li className='contact__list--rrss pad--mobile border__medium'>
                <a
                    href='/'
                    className='icon__link--mobile txt__dark'
                    title=''
                    id='linkMobile'
                >
                    <i className='contact__list--icon fas fa-mobile-alt' />
                </a>
            </li>
        );
    }
}

export default SocialMedia;