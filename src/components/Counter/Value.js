import { PropTypes } from "prop-types";

const Value = ({ value }) => {
  return <span className="Counter__value">{value}</span>;
};

Value.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Value;
