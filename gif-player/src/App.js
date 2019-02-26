import React, { Component } from 'react';
import { VoicePlayer, VoiceRecognition } from 'react-voice-components';
import { Route, Link } from 'react-router-dom';
import './App.css';
import { fetchGif, userSearch } from './services/giphy';
import SearchText from './components/SearchText';
import GifList from './components/GifList';
import KeyboardDiv from './components/KeyboardDiv';


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
      console.log(gifResp);
        this.setState(prevState => {
          return {
          gifs: [...prevState.gifs, gifResp],
          currentGif: gifResp,
          currentWord: newGif
        };
      });
        // debugger;
      }
      catch(error){
      console.log(error);
    }
  }

  render() {
    const { newGif } = this.state;
    return (
      <div className="App">

          <div className='home'>
            <h1>GIF to SPEECH</h1>
          </div>

        <VoicePlayer
        play
        text="We are working! .. "
        />

        <GifList gifs={this.state.gifs} />

        <div className='btnWarp'>
          <Link to="/search-text"> + </Link>
        </div>
        <main>
          <Route path="/search-text" render={() => (
            <div>
              <SearchText searchText={this.searchText}/>
              <KeyboardDiv keyboard={this.state.keyboard}/>
            </div>
        )} />

      </main>
      </div>
    );
  }
}

export default App;
