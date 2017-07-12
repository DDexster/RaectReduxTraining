import React, { Component } from 'react';
import Clock from './Clock';
import dateFormat from 'dateformat';
import { Form, FormControl, Button} from 'react-bootstrap';


import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: new Date(),
      formattedDate: 'Now',
      newDeadline: ''
    };
  }

  changeDeadline(){
    const date = Date.parse(this.state.newDeadline);
    const formattedDate = dateFormat(date, "dddd, mmmm dS, yyyy");
    this.setState({
      deadline: date ? date : new Date(),
      formattedDate,
      newDeadline: ''
    })
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.changeDeadline();
    }
  }

  render() {
    return (
    <div className="App">
        <div className="App-title">
          Countdown to {this.state.formattedDate}
        </div>
      <Clock
        deadline={this.state.deadline}
      />
      <Form inline>
        <FormControl
          className="Deadline-input"
          type="text"
          placeholder="Enter new Date"
          value = {this.state.newDeadline}
          onChange={event => this.setState({newDeadline: event.target.value})}
          onKeyPress={this.handleKeyPress}
        />
        <Button onClick={() => this.changeDeadline()}>
          Submit
        </Button>
      </Form>
    </div>
    );
  }
};

export default App;
