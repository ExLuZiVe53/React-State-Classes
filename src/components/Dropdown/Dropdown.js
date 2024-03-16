import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  isToogle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };
  /*
  isShow = () => {
    this.setState({visible:true});
  }
  
  isHide = () => {
    this.setState({visible:false});
  }
  */
  render() {
    const { visible } = this.state;
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.isToogle}
        >
          {visible ? "Hide" : "Show"}
        </button>

        {visible && <div className="Dropdown__menu">Drop-down menu</div>}
      </div>
    );
  }
}
export default Dropdown;
