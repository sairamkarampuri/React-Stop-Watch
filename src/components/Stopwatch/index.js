// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0}

  clearTimerInterval = () => clearInterval(this.timerId)

  onStartTimer = () => {
    this.timerId = setInterval(this.stopwatch, 1000)
  }

  stopwatch = () => {
    const {seconds} = this.state
    if (seconds === 59) {
      this.setState(prevState => ({
        seconds: 0,
        minutes: prevState.minutes + 1,
      }))
    } else {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    }
  }

  onStopTimer = () => {
    this.clearTimerInterval()
  }

  onResetTimer = () => {
    this.clearTimerInterval()
    this.setState({
      seconds: 0,
      minutes: 0,
    })
  }

  renderingTimeOnScreen = () => {
    const {minutes, seconds} = this.state
    const showSeconds = seconds > 9 ? seconds : `0${seconds}`
    const showMinutes = minutes > 9 ? minutes : `0${minutes}`

    return `${showMinutes}:${showSeconds}`
  }

  render() {
    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="timer-section">
            <h1 className="heading">Stopwatch</h1>
            <div className="box-container">
              <div className="title-section">
                <img
                  className="stopwatch-img"
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="stopwatch"
                />
                <p className="timer-text">Timer</p>
              </div>
              <h1 className="timer">{this.renderingTimeOnScreen()}</h1>
              <div className="buttons-section">
                <button
                  className="button btn-start"
                  type="button"
                  onClick={this.onStartTimer}
                >
                  Start
                </button>
                <button
                  className="button btn-stop"
                  type="button"
                  onClick={this.onStopTimer}
                >
                  Stop
                </button>
                <button
                  className="button btn-reset"
                  type="button"
                  onClick={this.onResetTimer}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
