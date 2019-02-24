import React, { Component } from 'react';
import './App.css';
import { fetchGif } from './services/giphy';

class App extends Component {
  constructor(){
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

  render() {
    return (
      <div className="App">
        <h1>Gif Player</h1>
      </div>
    );
  }
}

export default App;
