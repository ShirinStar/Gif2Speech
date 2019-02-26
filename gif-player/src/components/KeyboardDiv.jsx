import React from 'react';

export default (props) => {

return (
  <div className="Keyboard-div">
    {keyboard.map(gifBox => (
      <div>{gifBox.keyName}</div>
    ))}
  </div>
  )
}
