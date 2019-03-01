import React from 'react';

const Header = () => {
  return(
    <div>
      <div >
        <h4 className='headerTwo'>an experiment with React.js and Giphy API
        <a className='gitLink' href="https://github.com/ShirinStar/gif-player"> → full project's repository. </a>
        </h4>
      </div>
      <div className='header'>
        <h1>GIF to SPEECH</h1>
        <h2 className='tagline'> playing verbally again </h2>
      </div>
    </div>
  )
}

export default Header
