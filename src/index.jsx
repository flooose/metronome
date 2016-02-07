import React from 'react';
import {AudioPlayer} from "./components/audio_player.jsx";
const BEATS_PER_MINUTE = [null, 30, 40, 50, 60, 70, 80, 90, 100, 120];

const blub = function (){
  let bla = "adfsd";
}

export var Metronome = React.createClass({
  handleSpaceBar: function(event){
    if(event.keyCode === 32){
      event.preventDefault();
      this.resetInitialState();
    }
  },

  componentWillMount: function(){
    window.addEventListener('keydown', this.handleSpaceBar);
  },

  resetInitialState: function(){
    this.setState(this.getInitialState())
  },

  getInitialState: function(){
    return {bpm: null}
  },

  render: function() {
    return(
      <div>
        <AudioPlayer bpm={this.state.bpm} />
        {BEATS_PER_MINUTE.map( bpm =>
          {
            let beat = bpm ? bpm : "reset";
            return (
              <div>
                <button value={beat} onClick={this.setMetronome}>{beat}</button>
              </div>
            );
          })}
      </div>
    );
  },

  setMetronome: function() {
    let event = arguments[0];
    let value = isNaN(event.target.value) ? null : parseFloat(event.target.value);
    this.setState({bpm: value});

  },
});

//React.render(<Metronome/>, document.getElementById('container'));
