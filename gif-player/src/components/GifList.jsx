import React from 'react';

export default (props) => {
  const { gifs, letters } = props;
  let counter = -1;
  return (
  <div className="gif-keyboards">
    <div className="gif-cointainer">
    {gifs.map(gif => {
      counter ++;
      return (
      <div className="gifBox">
        <img className="gifImg" src={gif[0].images.fixed_width.url} alt=''/>
        <div className="letter-show"> {letters[counter]}
        </div>
      </div>
    )})}
    </div>
 </div>
 )
}
