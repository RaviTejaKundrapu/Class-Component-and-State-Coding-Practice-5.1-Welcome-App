// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {status: 'Subscribe'}

  buttonStatus = () => {
    this.setState(prevStatus => ({
      status: prevStatus.status === 'Subscribe' ? 'Subscribed' : 'Subscribe',
    }))
  }

  render() {
    const {status} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="message">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.buttonStatus}>
          {status}
        </button>
      </div>
    )
  }
}

export default Welcome
