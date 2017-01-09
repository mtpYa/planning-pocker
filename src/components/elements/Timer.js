import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      timerValue: null
    };

    this.showTimer = this.showTimer.bind(this);
  }

  static get propTypes() {
    return {
      socket: React.PropTypes.object.isRequired,
      userChoiseResponse: React.PropTypes.func.isRequired
    };
  }

  componentDidMount() {
    this.props.socket.on('timerCount', timeValue => {
      this.setState({
        timerValue: timeValue
      });
    });

    this.props.socket.on('getUserAnswer', () => {
      this.setState({
        timerValue: null
      });
      this.props.userChoiseResponse();
    });
  }

  render() {
    return this.state.timerValue
      ? <span>{this.showTimer()}</span>
      : null
  }

  showTimer() {
    let seconds = this.state.timerValue;
    let minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : '0' + seconds;

    return `${minutes} : ${seconds}`;
  }

}

export default Timer;
