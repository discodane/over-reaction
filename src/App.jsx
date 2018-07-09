import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>Running time is {this.state.date.toLocaleTimeString()}. - This portion is done using lifecycle hooks</h2>
      </div>
    );
  }
}

class StaticClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({date: new Date()});
  }


  render() {
    return (
      <div>
        <h2>Static time is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.handleClick}> Update the date </button>
      </div>
    )
  }
}
class App extends Component {
  
  render() {
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    const element = <h1>Hello, rendering of a jsx object... World</h1>;
    const functionalComponent = <Welcome name={"discodane (which was passed in by props)"} />;
    const otherFunctionalComponent = <Welcome name={'bobo the clown (which was also passed in by props)'} />;

    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This should be a preview of all react and jsx etc has to offer
        </p>
        {element}
        {functionalComponent}
        {otherFunctionalComponent}
        <Clock />
        <StaticClock />
      </div>
    );
  }
  
}

export default App;
