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
  }

  async componentDidMount() {
    try {
      const gifs = await fetchGif();
      this.setState({
        gifs
      })
    }
    catch(error){
      console.log(error);
    }
  }

//search gif by word
async searchText(newGif){
    console.log(newGif);
    try {
      const newGif = await userSearch();
        this.setState({
          newGif: this.searchText.gif.value
        })
      }
      catch(error){
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
          <div className='home'>
            <h1>GIF to SPEECH</h1>
          </div>
        <SearchText searchText={this.searchText}/>
        <VoicePlayer
        play
        text="Hey Drake Brian and Jason.. "
        />
      </div>
    );
  }
}

export default App;
