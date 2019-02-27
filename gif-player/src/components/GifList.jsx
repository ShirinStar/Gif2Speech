import React from 'react';

export default (props) => {
  const { gifs } = props;
  const { letters } = props;
  return (
  <div className="gif-keyboards">
    <div className="gif-cointainer">
    <p>{letters}</p>
    {gifs.map(gif => (
      <div className="gifBox">
      <img className="gifImg" src={gif[0].images.fixed_width.url} alt=''/>

      </div>
    ))}
  </div>
</div>
)}
