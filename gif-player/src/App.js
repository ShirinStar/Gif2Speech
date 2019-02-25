import React, { Component } from 'react';
import { VoicePlayer, VoiceRecognition } from 'react-voice-components';
import './App.css';
import { fetchGif, userSearch } from './services/giphy';
import SearchText from './components/SearchText';


class App extends Component {
  constructor() {
    super();
    this.state= {
      gifs: []
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
          gifs: gifResp
        })
        // debugger;
      }
      catch(error){
      console.log(error);
    }
  }

  render() {
    const {newGif} = this.state;
    return (
      <div className="App">
          <div className='home'>
            <h1>GIF to SPEECH</h1>
          </div>
        <SearchText searchText={this.searchText}/>
        {this.state.gifs.map(cats => (
          <div>
          <img src={cats.images.preview_gif.url} />
          </div>
        ))}
        <VoicePlayer
        play
        text="Hey Drake Brian and Jason.. "
        />
      </div>
    );
  }
}

export default App;
