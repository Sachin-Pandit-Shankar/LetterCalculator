// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {word: ''}

  //   getCount = () => {
  //     const {word} = this.state
  //     if (word !== '') {
  //       this.setState({count: word.length})
  //     }
  //   }

  countWord = event => {
    this.setState({word: event.target.value})
  }

  render() {
    const {word} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Calculate the letters you enter</h1>
          <label htmlFor="letter" className="label-text">
            Enter the Phrase
          </label>
          <br />
          <input
            type="text"
            id="letter"
            placeholder="Enter the phrase"
            className="input"
            onChange={this.countWord}
          />
          <br />
          <button type="button" className="btn">
            <p className="text">No.of letters: {word.length}</p>
          </button>
        </div>
        <div className="image-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calImage"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
