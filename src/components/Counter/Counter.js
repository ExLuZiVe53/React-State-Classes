import React, { Component } from "react";
import "./Counter.css";
import Controls from "./Controls.js";
import Value from "./Value.js";

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  // 1) Static
  // 2) State
  // 3) Methods
  // 4) Render

  /*  constructor (){
    super();
    this.state = {
      value: 0,
    }; */
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    //SynteticEvent Object
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className="Counter">
        <Value value={value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
