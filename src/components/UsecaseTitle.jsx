import PropTypes from "prop-types";

const UsecaseTitle = ({ text }) => {
  return <div className="UsecaseTitle">{text}</div>;
};

UsecaseTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default UsecaseTitle;
