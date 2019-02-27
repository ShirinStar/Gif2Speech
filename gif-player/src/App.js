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
      letters:['q','w','e','r','t']
    }
    this.searchText = this.searchText.bind(this);
    this.handleSound = this.handleSound.bind(this);
  }

//search gif by word
async searchText(newGif){
    try {
      const gifResp = await userSearch(newGif);
      const keyboards = {
        keyName: 'q',
        keyCode: '81',
        word: newGif,
        gif: gifResp
      }
        this.setState(prevState => {
          return {
          gifs: [...prevState.gifs, gifResp],
          currentGif: gifResp,
          currentWord: newGif,
          keyboards: [...prevState.keyboards, keyboards],
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
      playSounds: [...prevState.playSounds, word]
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
      {
        this.state.letters.map((letter, i) =>(
          <KeyHandler
            keyValue={letter}
            onKeyHandle={() => {
              this.handleSound(this.state.keyboards[i].word);
            }}
           />
        ))}
        <GifList gifs={this.state.gifs} />
        {
          this.state.playSounds.map((props, i) =>(
            <TextToSpeech word={this.state.playSounds[i]}/>
          ))}
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
