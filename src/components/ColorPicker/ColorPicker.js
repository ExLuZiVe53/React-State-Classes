import { Component } from "react";
import PropTypes from "prop-types";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIndex = (index) => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = (index) => {
    const optionClasses = ["ColorPicker__option"];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push("ColorPicker__option--active");
    }
    return optionClasses.join(" ");
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Selected color: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
/*
 border: index===this.state.activeOptionsIdx ? "2px solid black" : "none"}}
         
const ColorPicker = ({ options }) => (
   <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2> 
    <div>
     {options.map(({ label, color )) => (
     <span key={label} className="ColorPicker__option"
     style={backgroundColor: color}}>
     </span>
     ))}
    </div>
  </div>
);
*/

ColorPicker.propTypes = {
  options: (PropTypes.arrayOf = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    index: PropTypes.number,
  }),
};

export default ColorPicker;
