import PropTypes from "prop-types";

const UsecaseSubtitle = ({ text }) => {
  return <div className="UsecaseSubtitle">{text}</div>;
};

UsecaseSubtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default UsecaseSubtitle;
