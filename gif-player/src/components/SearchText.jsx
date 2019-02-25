import React, { Component } from 'react';

export class SearchText extends Component {
  state = {
    gif: ''
  }

  onChange = (e) => this.setState({
    [e.target.name]: e.target.value
    });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchText(this.state.gif);
    this.setState({ gif: '' })
  }

  render() {
    return(
  <div>
    <form className="mainForm" onSubmit={this.onSubmit}>
    <input className ="typeGif"
      type='text'
      name='gif'
      placeholder='type a word ...'
      value = {this.state.gif}
      onChange={this.onChange}
    />
    <input className="submitSearch"
      type='submit'
      value='submit'
    />
    </form>
  </div>
    )
  }
}

export default SearchText
