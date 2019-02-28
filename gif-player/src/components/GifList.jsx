import React from 'react';

export default (props) => {
  const { gifs } = props;
  return (
  <div className="gif-keyboards">
    <div className="gif-cointainer">
    {gifs.map(gif => (
      <div className="gifBox">
      <img className="gifImg" src={gif[0].images.fixed_width.url} alt=''/>
      </div>
    ))}
    </div>
</div>
)}
