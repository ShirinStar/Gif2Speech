import React from 'react';

const Again = (props) => {
  return (
    <div>
    <p className='done'> Now just play and hit your keys! </p>
    <button className='again' onClick={props.refreshPage}> Again? </button>
    </div>
  )
}

export default Again
