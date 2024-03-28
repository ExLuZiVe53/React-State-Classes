import PropTypes from "prop-types";

const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className="Counter__controls">
      <button type="button" onClick={onIncrement}>
        Increase by 1
      </button>
      <button type="button" onClick={onDecrement}>
        Reduce by 1
      </button>
    </div>
  );
};

Controls.propTypes = {
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

export default Controls;
