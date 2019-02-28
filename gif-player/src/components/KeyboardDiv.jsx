import React from 'react';


export default (props) => {
const { keyboard } = props;
return (
  <div className="Keyboard-div">
    {letters.map(letter => (
        letter.keyName,
        console.log(gifBox.keyName)
    ))}
  </div>
  )
}


///////


<div className="letter-show">
<p>{props.letters.map(letter=> (
  letters[0]))}
  </p>
</div>

///////////////////////////////////////

  this.handleUp = this.handleUp.bind(this);

handleSound(word) {
  const isShown = false;
  this.setState(prevState => {
    return {
    playSounds: [...prevState.playSounds, word],
    isShown: !prevState.isShown
  };
});
}

handleUp(){
const isShown = true;
  this.setState(prevState => {
  return {
    isShown: false
}
})
}

<div>
{ this.state.isShown ? <GifList gifs={this.state.gifs} /> : null }
</div>

<KeyHandler keyEventName='keyup' onKeyHandle={this.handleUp} />
