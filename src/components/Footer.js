import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div id="social-links">
        <a href='https://www.linkedin.com/in/claytonjjones/'>
          <img src={'/assets/linkedin.png'} alt={'LinkedIn logo'} />
        </a>
        <a href='https://github.com/clayton-jones'>
          <img src={'/assets/github.png'} alt={'GitHub logo'} />
        </a>
      </div>
    </footer>
  )
}