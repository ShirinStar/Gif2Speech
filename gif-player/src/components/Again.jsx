import React from 'react';

const Again = (props) => {
  return (
    <div>
    <p className='done'> Now just play and hit your keys! </p>
    <button onClick={props.refreshPage}> Again? </button>
    </div>
  )
}

export default Again
