import React from 'react';
import ReactDOM from 'react-dom';

export class AudioPlayer extends React.Component {
  componentWillMount(){
    this.interval = null;
  }
  componentDidUpdate(){
    let millis, interval;

    let bpm = this.props.bpm;
    let domNode = ReactDOM.findDOMNode(this);

    clearInterval(this.interval);

    if(bpm){
      millis = Math.round((60/bpm)*1000);
      this.interval = setInterval(domNode.play.bind(domNode), millis);
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
