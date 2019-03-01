import React, { Component } from 'react';
import { withRouter } from "react-router";

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
      this.props.history.push('/');
  }

  render() {
    return(
    <div>
      <form className="mainForm" onSubmit={this.onSubmit}>
        <input className ="typeGif"
          type='text'
          name='value'
          placeholder='type something...'
          autoComplete='off'
          value={this.state.value}
          onChange={this.onChange}
        />
    </form>
  </div>
    )
  }
}

export default withRouter (SearchText)
