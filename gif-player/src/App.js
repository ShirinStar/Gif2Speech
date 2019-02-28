import React, { Component } from 'react';
import KeyHandler, { KEYPRESS } from 'react-key-handler';
import { Route, Link } from 'react-router-dom';
import './App.css';
import { fetchGif, userSearch } from './services/giphy';
import TextToSpeech from './components/TextToSpeech';
import SearchText from './components/SearchText';
import GifList from './components/GifList';

class App extends Component {
  constructor() {
    super();
    this.state= {
      gifs: [],
      keyboards: [],
      playSounds: [],
      letters:['q','w','e','r','t','a','s','d','f','g','z','x','c','v','b']
    }
    this.searchText = this.searchText.bind(this);
    this.handleSound = this.handleSound.bind(this);
  }

//search gif by word
async searchText(newGif){
    try {
      const gifResp = await userSearch(newGif);
      const keyboards = {
        word: newGif,
        gif: gifResp
      }
        this.setState(prevState => {
          return {
          gifs: [...prevState.gifs, gifResp],
          currentGif: gifResp,
          currentWord: newGif,
          keyboards: [...prevState.keyboards, keyboards]
      };
    });
  }
        catch(error){
        console.log(error);
  }
}

  handleSound(word) {
    this.setState(prevState => {
      return {
      playSounds: [...prevState.playSounds, word],
    };
  });
}

  render() {
    const { newGif, isShown } = this.state;
    return (
      <div className="App">

        <div className='header'>
          <h1>GIF to SPEECH</h1>
          <h2 className='tagline'> playing verbally again </h2>
        </div>

        <div className='main'>
        <h2 className='rule'> build your keyboard </h2>
          {this.state.keyboards.length===15 ? 'hit your keys':
          <div className='btnWarp'>
            <Link to="/search-text"> click to add Gifs </Link>
          <main className='search'>
            <Route path="/search-text" render={() => (
              <div>
                <SearchText searchText={this.searchText}/>
              </div>
              )}
            />
          </main>
          </div>
        }
        </div>

        <GifList gifs={this.state.gifs} />

      {
        this.state.letters.map((letter, i) => (
          this.state.keyboards[i] && <KeyHandler
            keyEventName='keydown'
            keyValue={letter}
            onKeyHandle={() => {
              this.handleSound(this.state.keyboards[i].word);
            }}
          />
        ))}



        {this.state.playSounds.map(sound => (
            <TextToSpeech word={sound}/>
        ))}

    </div>
    )
  }
}

export default App;
