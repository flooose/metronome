import React from 'react';
import {AudioPlayer} from "./components/audio_player.jsx";
const BEATS_PER_MINUTE = [null, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
const INITIAL_STATE = {bpm: null};
import './css/metronome.css';

export class Metronome extends React.Component {

  constructor(props){
    super(props);
    this.state = INITIAL_STATE;
  }

  handleSpaceBar(event){
    if(event.keyCode === 32){
      event.preventDefault();
      this.resetInitialState();
    }
  }

  componentWillMount(){
    window.addEventListener('keydown', this.handleSpaceBar.bind(this));
  }

  resetInitialState(){
    this.setState(INITIAL_STATE);
  }

  render() {
    return(
      <div>
        <AudioPlayer bpm={this.state.bpm} />
        {BEATS_PER_MINUTE.map( bpm =>
          {
            let beat = bpm ? bpm : "reset";
            return (
              <div>
                <button value={beat} onClick={this.setMetronome.bind(this)}>{beat}</button>
              </div>
            );
          })}
              <div className="blub"><div className="flupp"></div></div>
      </div>
    );
  }

  setMetronome() {
    let event = arguments[0];
    let value = isNaN(event.target.value) ? null : parseFloat(event.target.value);
    this.setState({bpm: value});
  }
}
