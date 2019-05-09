import React from 'react';
import SocialMedia from './SocialMedia';

class SocialMediaList extends React.Component {
    render() {
        return (
            <ul className='contact__list'>
                <SocialMedia 
                    classLink='icon__link--mobile' 
                    iconSocialMedia='fas fa-mobile-alt' 
                    aditionalClass='pad--mobile' />
                
                <SocialMedia 
                    classLink='email'
                    iconSocialMedia='far fa-envelope' 
                />
                
                <SocialMedia
                    classLink='link__linkedin'
                    iconSocialMedia='fab fa-linkedin-in'
                />
                
                <SocialMedia
                    classLink=''
                    iconSocialMedia='fab fa-github-al'
                />

                {/* <li className='contact__list--rrss pad--mobile border__medium'>
                    <a href='/' className='icon__link--mobile txt__dark' title='' id='linkMobile'>
                        <i className='contact__list--icon fas fa-mobile-alt' />
                    </a>
                </li>

                <li className='contact__list--rrss border__medium'>
                    <a className='email txt__dark' href='/'>
                        <i className='contact__list--icon far fa-envelope' />
                    </a>
                </li>

                <li className='contact__list--rrss border__medium'>
                    <a href='/' id='linkEdin' className='link__linkedin txt__dark'>
                        <i className='contact__list--icon fab fa-linkedin-in' />
                    </a>
                </li>

                <li className='contact__list--rrss border__medium'>
                    <a href='/' id='linkGithub' className='txt__dark'>
                        <i className='contact__list--icon fab fa-github-alt' />
                    </a>
                </li> */}
            </ul>
        );
    }
}

export default SocialMediaList;