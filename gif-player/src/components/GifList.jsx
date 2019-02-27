import React from 'react';

export default (props) => {
  const { gifs } = props;
  return (
    <div className="Gif-list">
    {gifs.map(gif => (
      <div>
      <img src={gif[0].images.fixed_width.url} alt=''/>
      </div>
    ))}
  </div>
)}
