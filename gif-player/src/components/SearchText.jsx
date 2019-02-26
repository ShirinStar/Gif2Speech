import React, { Component } from 'react';


export class SearchText extends Component {
  constructor(){
    super();
    this.state = {
      value: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => this.setState({
    [e.target.name]: e.target.value
  });

  onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target;
    this.props.searchText(this.state.value);
    this.setState({ value: '' })
  }

  render() {
    return(
  <div>
    <form className="mainForm" onSubmit={this.onSubmit}>
    <input className ="typeGif"
      type='text'
      name='value'
      placeholder='type a word ...'
      value={this.state.value}
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
