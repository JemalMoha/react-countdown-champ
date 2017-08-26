import React, { Component } from 'react';
import { Form, FormControl, Button} from 'react-bootstrap';
import Clock from './Clock';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
    this.changeDeadline = this.changeDeadline.bind(this);
    this.changeNewDeadline = this.changeNewDeadline.bind(this);
  }
  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline
    })
  }
  changeNewDeadline(e) {
    e.preventDefault();
    this.setState({
      newDeadline: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <Clock deadline={this.state.deadline}/>
      <Form inline>
          <FormControl className="Deadline-input" onChange={this.changeNewDeadline}type="text" placeholder="new Date" />
          <Button onClick={this.changeDeadline}>Submit</Button>
        </Form>

      </div>
    )
  }

}

export default App;
