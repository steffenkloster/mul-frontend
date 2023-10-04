import PropTypes from "prop-types";

const DataField = ({ label, value }) => {
  return (
    <div>
      <div className="uppercase text-xs font-medium">{label}</div>
      <div>{value}</div>
    </div>
  );
};

DataField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default DataField;
