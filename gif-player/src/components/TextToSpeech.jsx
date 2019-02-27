import React, { Component } from 'react';
import { VoicePlayer, VoiceRecognition } from 'react-voice-components';


const TextToSpeech = (props) => {
  return (
    <VoicePlayer
      play
      text="HEY DAVID!!!!!!!! "
      />
  )
}

export default TextToSpeech
