import React from 'react';


export default (props) => {
const { keyboard } = props;
return (
  <div className="Keyboard-div">
    {keyboard.map(gifBox => (
        gifBox.keyName,
        <GifList gif={gifBox} />
    ))}
  </div>
  )
}
