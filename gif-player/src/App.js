import React, { Component } from 'react';
import KeyHandler, { KEYPRESS } from 'react-key-handler';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';
import { userSearch } from './services/giphy';
import TextToSpeech from './components/TextToSpeech';
import SearchText from './components/SearchText';
import GifList from './components/GifList';
import Header from './components/Header';
import Again from './components/Again';
import Instructions from './components/Instructions';

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
    this.refreshPage = this.refreshPage.bind(this);
    this.closeInstruction = this.closeInstruction.bind(this);
  }

//search gif by word
async searchText(newGif) {
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
        catch(error) {
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

  refreshPage() {
    this.setState(prevState => {
      return {
          gifs: [],
          keyboards: [],
          playSounds: [],
          letters:['q','w','e','r','t','a','s','d','f','g','z','x','c','v','b']
  };
});
    this.props.history.push('/')
  }

  closeInstruction() {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="App">
        <div className='home'>
            <Link className='instruction' to='/instruction'> Instructions </Link>
            <Route path='/instruction' render={() => (
              <div>
              <Instructions closeInstruction={this.closeInstruction}/>
              </div>
              )}
              />

          <Header />
          <div className='btnDiv'>
            {this.state.keyboards.length===15 ? <Again refreshPage={this.refreshPage}/> :
            <div className='btnWarp'>
            <Link className='addLink' to='/search-text'> Add Gifs </Link>
            <main className='search'>
            <Route path='/search-text' render={() => (
              <div>
              <SearchText searchText={this.searchText}/>
              </div>
              )}
            />
          </main>
          </div>
          }
        </div>
      </div>
      <GifList gifs={this.state.gifs} letters={this.state.letters} />
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

export default withRouter (App);
