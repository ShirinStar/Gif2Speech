import React from 'react';

const Instructions = (props) => {
  return(
    <div>
    <p className='instructionLine'> add gifs and press the mentioned keys to play</p>
    <button className='close' onClick={props.closeInstruction}> X </button>
    </div>
  )
}

export default Instructions
