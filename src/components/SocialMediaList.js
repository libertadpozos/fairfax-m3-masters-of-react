import React from 'react';
import SocialMedia from './SocialMedia';

class SocialMediaList extends React.Component {
    render() {
        return (
            <ul className='contact__list'>
                <SocialMedia 
                    classLink='icon__link--mobile' 
                    iconSocialMedia='fas fa-mobile-alt' 
                    aditionalClass='pad--mobile' 
                />
                
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
                    iconSocialMedia='fab fa-github-alt'
                />
            </ul>
        );
    }
}

export default SocialMediaList;