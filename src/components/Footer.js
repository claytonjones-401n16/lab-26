import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div id="social-links">
        <h1>Clayton Jones</h1>
        <a href='https://www.linkedin.com/in/claytonjjones/' target='_blank' rel='noopener noreferrer'>
          <img src={'/assets/linkedin.png'} alt={'LinkedIn logo'} />
        </a>
        <a href='https://github.com/clayton-jones' target='_blank' rel='noopener noreferrer'>
          <img src={'/assets/github.png'} alt={'GitHub logo'} />
        </a>
      </div>
    </footer>
  )
}