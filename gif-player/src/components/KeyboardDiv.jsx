import React from 'react';

export default (props) => {

return (
  <div className="Keyboard-div">
    {keyboard.map(gifBox => (
      <div>{gifBox.keyName}</div>

      //onClink in div-> and then connect it to
      //the app.js
      //to what am i connecting it in the keyboard??
      //and then display the Gif list here.
        
    ))}
  </div>
  )
}
