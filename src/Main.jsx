import React, { Component } from "react";
import Button from "./Button";
import "./Main.css";

class Main extends Component {
  state = {
    counter: 0,
  };

  addFiveHandler = () => {
    this.setState({ counter: this.state.counter + 5 });
  };

  addOneHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  addResetHandler = () => {
    this.setState({ counter: 0 });
  };

  addMinusOneHandler = () => {
    this.setState({ counter: Math.max(this.state.counter - 1, 0) });
  };

  addMinusFiveHandler = () => {
    this.setState({ counter: Math.max(this.state.counter - 5, 0) });
  };

  render() {
    let counterClassName = "counter even";
    if (!this.state.counter) counterClassName = "counter";
    else if (this.state.counter % 2) counterClassName = "counter odd";

    return (
      <main className="Main">
        <div className="counter-container">
          <div className={counterClassName}>
            <h1>{this.state.counter}</h1>
          </div>
        </div>
        <div className="buttons">
          <Button click={this.addFiveHandler}>Add five</Button>
          <Button click={this.addOneHandler}>Add one</Button>
          <Button click={this.addResetHandler}>Reset</Button>
          <Button click={this.addMinusOneHandler}>Remove one</Button>
          <Button click={this.addMinusFiveHandler}>Remove five</Button>
        </div>
      </main>
    );
  }
}

export default Main;
