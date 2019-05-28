import React from 'react';

class TwitterShareButton extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <button className='button-twitter'>
        <a className='twitter-link' href={url} target='_blank' rel="noopener noreferrer">
          <i className='fab fa-twitter twitter-icon' />
          Compartir en Twitter
        </a>
      </button>
    );
  }
}

export default TwitterShareButton;
