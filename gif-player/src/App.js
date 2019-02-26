import React, { Component } from 'react';
import { VoicePlayer, VoiceRecognition } from 'react-voice-components';
import './App.css';
import { fetchGif, userSearch } from './services/giphy';
import SearchText from './components/SearchText';
import GifList from './components/GifList';


class App extends Component {
  constructor() {
    super();
    this.state= {
      gifs: [],
      keyboard: [{
        keyName: 'Q',
        keyCode: '81',
        word: '',
        gif: null
      },
      {
        keyName: 'W',
        keyCode: '87',
        word: '',
        gif: null
      },
      {
        keyName: 'E',
        keyCode: '69',
        word: '',
        gif: null
      },
      {
        keyName: 'R',
        keyCode: '82',
        word: '',
        gif: null
      }]
    }
    this.searchText = this.searchText.bind(this);
  }

//search gif by word
async searchText(newGif){
    console.log(newGif);
    // debugger;
    try {
      const gifResp = await userSearch(newGif);
        this.setState({
          gifs: gifResp,
          currentGif: gifResp,
          currentWord: newGif
        })
        // debugger;
      }
      catch(error){
      console.log(error);
    }
  }

  render() {
    const {newGif } = this.state;
    return (
      <div className="App">
          <div className='home'>
            <h1>GIF to SPEECH</h1>
          </div>
        <GifList gifs={this.state.gifs} />

        <SearchText searchText={this.searchText}/>
        <VoicePlayer
        play
        text="Hey David thank you for the help! .. "
        />
      </div>
    );
  }
}

export default App;
