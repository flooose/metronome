import React from 'react';
import ReactDOM from 'react-dom';
import '../css/audio_player.css';

export class AudioPlayer extends React.Component {

  componentWillMount(){
    this.playbackRepeatInterval = null;
  }

  componentDidUpdate(){
    let millis;

    let beatInterval = this.props.beatInterval
    let domNode = ReactDOM.findDOMNode(this);

    clearInterval(this.playbackRepeatInterval);

    if(beatInterval){
      this.playbackRepeatInterval = setInterval(domNode.play.bind(domNode), beatInterval);
    }
  }

  render(){
    return (
      <audio controls>
        <source src="sidestick01.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    )}
}
