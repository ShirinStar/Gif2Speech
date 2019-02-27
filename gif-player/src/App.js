import React, { Component } from 'react';
import TextToSpeech from './components/TextToSpeech';
import KeyHandler, { KEYPRESS } from 'react-key-handler';
import { Route, Link } from 'react-router-dom';
import './App.css';
import { fetchGif, userSearch } from './services/giphy';
import SearchText from './components/SearchText';
import GifList from './components/GifList';

class App extends Component {
  constructor() {
    super();
    this.state= {
      gifs: [],
      keyboard: {
        keyName: 'q',
        keyCode: '81',
        word: '',
        gif: null
      },
      playSounds: [{
        soundWord: ''
      }]

    }
    this.searchText = this.searchText.bind(this);
    this.handleSound = this.handleSound.bind(this);
  }

//search gif by word
async searchText(newGif){
    console.log(newGif);
    try {
      const gifResp = await userSearch(newGif);
      console.log(gifResp);
        this.setState(prevState => {
          return {
          gifs: [...prevState.gifs, gifResp],
          currentGif: gifResp,
          currentWord: newGif,
          keyboard: [{
            keyName: 'q',
            keyCode: '81',
            word: newGif,
            gif: gifResp
          }]
        };
      });
    }
      catch(error){
      console.log(error);
    }
  }

  handleSound() {
    const newSounds = this.state.playSounds;
    this.setState(prevState => {
      return {
      playSounds: [...prevState.playSounds, newSounds]
    };
    })
  }


  render() {
    const { newGif } = this.state;
    return (
      <div className="App">
      <div className='home'>
        <h1>GIF to SPEECH</h1>
      </div>
      <KeyHandler
         keyValue="q"
         onKeyHandle={this.handleSound}
       />
        <GifList gifs={this.state.gifs} />
        {
          this.state.playSounds.map(sound =>(
            <TextToSpeech />
          ))
        }
        <div className='btnWarp'>
          <Link to="/search-text"> + </Link>
        </div>
        <main>
          <Route path="/search-text" render={() => (
            <div>
              <SearchText searchText={this.searchText}/>
            </div>
        )} />

      </main>
      </div>
    );
  }
}

export default App;
